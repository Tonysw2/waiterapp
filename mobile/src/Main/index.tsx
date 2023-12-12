import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components/native'
import { CartItemType } from '../@types/CartItemType'
import { CategoryType } from '../@types/CategoryType'
import { ProductType } from '../@types/ProductType'
import { Button } from '../components/Button'
import { Cart } from '../components/Cart'
import { Categories } from '../components/Categories'
import { Header } from '../components/Header'
import { Empty } from '../components/Icons/Empty'
import { Menu } from '../components/Menu'
import { TableModal } from '../components/TableModal'
import { Text } from '../components/Text'
import { api } from '../utils/api'
import {
  CategoriesContainer,
  CenteredContainer,
  Container,
  Footer,
  FooterContainer,
  Loader,
  MenuContainer,
} from './styles'

export function Main() {
  const { colors } = useTheme()
  const [isLoading, setIsLoading] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [isLoadingProducts, setIsLoadingProducts] = useState(false)
  const [selectedTable, setSelectedTable] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCategoriesAndProducts() {
      try {
        setIsLoading(true)

        const [categoriesRes, productsRes] = await Promise.all([
          api.get<CategoryType[]>(`/categories`),
          api.get<ProductType[]>(`/products`),
        ])

        setProducts(productsRes.data)
        setCategories(categoriesRes.data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategoriesAndProducts()
  }, [])

  async function handleSelectCategory(categoryId: string) {
    try {
      setIsLoadingProducts(true)

      const route = !categoryId
        ? '/products'
        : `/categories/${categoryId}/products`

      const { data } = await api.get<ProductType[]>(route)
      setProducts(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingProducts(false)
    }
  }

  function handleSaveTable(table: string) {
    setSelectedTable(table)
  }

  function handleResetOrder() {
    setSelectedTable(null)
    setCartItems([])
  }

  function handleAddToCart(product: ProductType) {
    if (!selectedTable) {
      setIsModalVisible(true)
    }

    setCartItems((state) => {
      const item = state.find(
        (cartItem) => cartItem.product._id === product._id,
      )

      if (!item) {
        return [...state, { product, quantity: 1 }]
      }

      const newCartItems = state.map((item) =>
        item.product._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )

      return newCartItems
    })
  }

  function handleDecrementCartItem(product: ProductType) {
    setCartItems((state) => {
      const item = state.find(
        (cartItem) => cartItem.product._id === product._id,
      )

      if (item?.quantity === 1) {
        return state.filter((cartItem) => cartItem.product._id !== product._id)
      }

      const newCartItems = state.map((item) =>
        item.product._id === product._id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      )

      return newCartItems
    })
  }

  return (
    <>
      <TableModal
        visible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false)
        }}
        onSave={handleSaveTable}
      />

      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />

        {isLoading && (
          <CenteredContainer>
            <Loader />
          </CenteredContainer>
        )}

        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories
                categories={categories}
                onSelectCategory={handleSelectCategory}
              />
            </CategoriesContainer>

            {isLoadingProducts ? (
              <CenteredContainer>
                <Loader />
              </CenteredContainer>
            ) : (
              <>
                {products.length > 0 ? (
                  <MenuContainer>
                    <Menu products={products} onAddToCart={handleAddToCart} />
                  </MenuContainer>
                ) : (
                  <CenteredContainer>
                    <Empty />
                    <Text color={colors.gray500} style={{ marginTop: 24 }}>
                      Nenhum produto foi encontrado
                    </Text>
                  </CenteredContainer>
                )}
              </>
            )}
          </>
        )}
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button
              disabled={isLoading}
              onPress={() => {
                setIsModalVisible(true)
              }}
            >
              Novo Pedido
            </Button>
          )}

          {selectedTable && (
            <Cart
              cartItems={cartItems}
              selectedTable={selectedTable}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCartItem}
              onConfirmOrder={handleResetOrder}
            />
          )}
        </FooterContainer>
      </Footer>
    </>
  )
}
