import { useState } from 'react'
import { FlatList } from 'react-native'
import { ProductType } from '../../@types/ProductType'
import { formatCurrency } from '../../utils/formatCurrency'
import { PlusCircle } from '../Icons/PlusCircle'
import { ProductModal } from '../ProductModal'
import { Text } from '../Text'
import {
  AddToCartButton,
  Image,
  Product,
  ProductDetails,
  Separator,
} from './styles'

type Props = {
  products: ProductType[]
  onAddToCart: (product: ProductType) => void
}

export function Menu({ products, onAddToCart }: Props) {
  const [isProductModalVisible, setIsProductModalVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  )

  function handleOpenModal(product: ProductType) {
    setIsProductModalVisible(true)
    setSelectedProduct(product)
  }

  return (
    <>
      <ProductModal
        product={selectedProduct}
        visible={isProductModalVisible}
        onAddToCart={onAddToCart}
        onClose={() => {
          setIsProductModalVisible(false)
        }}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(product) => product._id}
        renderItem={({ item: product }) => (
          <Product
            onPress={() => {
              handleOpenModal(product)
            }}
          >
            <Image
              source={{
                uri: `http://192.168.0.113:3001/uploads/${product.imagePath}`,
              }}
            />

            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text size={14} color="#666666">
                {product.description}
              </Text>
              <Text size={14} weight="600">
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>

            <AddToCartButton
              onPress={() => {
                onAddToCart(product)
              }}
            >
              <PlusCircle />
            </AddToCartButton>
          </Product>
        )}
      />
    </>
  )
}
