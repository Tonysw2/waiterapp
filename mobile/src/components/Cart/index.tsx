import { FlatList } from 'react-native'
import { useTheme } from 'styled-components'

import { CartItemType } from '../../@types/CartItemType'

import {
  ActionButton,
  Actions,
  Image,
  Item,
  ProductDetails,
  ProductInfo,
  QuantityContainer,
  Summary,
  TotalContainer,
} from './styles'

import { MinusCircle } from '../Icons/MinusCircle'
import { PlusCircle } from '../Icons/PlusCircle'
import { Text } from '../Text'

import { useState } from 'react'
import { ProductType } from '../../@types/ProductType'
import { api } from '../../utils/api'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../Button'
import { OrderConfirmedModal } from '../OrderConfirmedModal'

type Props = {
  cartItems: CartItemType[]
  selectedTable: string
  onConfirmOrder: () => void
  onAdd: (product: ProductType) => void
  onDecrement: (product: ProductType) => void
}

export function Cart({
  cartItems,
  selectedTable,
  onAdd,
  onDecrement,
  onConfirmOrder,
}: Props) {
  const { colors } = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [isConfirmedModalVisible, setIsConfirmedModalVisible] = useState(false)

  const total = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.product.price,
    0,
  )

  async function handleConfirmOrder() {
    try {
      setIsLoading(true)
      await api.post('/orders', {
        table: selectedTable,
        products: cartItems.map((cartItem) => ({
          product: cartItem.product._id,
          quantity: cartItem.quantity,
        })),
      })
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
      setIsConfirmedModalVisible(true)
    }
  }

  function handleOk() {
    setIsConfirmedModalVisible(false)
    onConfirmOrder()
  }

  return (
    <>
      <OrderConfirmedModal visible={isConfirmedModalVisible} onOk={handleOk} />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          style={{ maxHeight: 150 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(cartItem) => cartItem.product._id}
          renderItem={({ item: cartItem }) => (
            <Item>
              <ProductInfo>
                <Image
                  source={{
                    uri: `http://192.168.0.113:3001/uploads/${cartItem.product.imagePath}`,
                  }}
                />

                <QuantityContainer>
                  <Text size={14} color={colors.gray500}>
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>

                <ProductDetails>
                  <Text size={14} weight="600">
                    {cartItem.product.name}
                  </Text>
                  <Text size={14} color={colors.gray500}>
                    {formatCurrency(cartItem.product.price)}
                  </Text>
                </ProductDetails>
              </ProductInfo>

              <Actions>
                <ActionButton
                  onPress={() => {
                    onAdd(cartItem.product)
                  }}
                >
                  <PlusCircle />
                </ActionButton>
                <ActionButton
                  onPress={() => {
                    onDecrement(cartItem.product)
                  }}
                >
                  <MinusCircle />
                </ActionButton>
              </Actions>
            </Item>
          )}
        />
      )}

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color={colors.gray500}>Total</Text>
              <Text size={18} weight="600" color={colors.gray600}>
                {formatCurrency(total)}
              </Text>
            </>
          ) : (
            <Text color={colors.gray400}>Seu carrinho está vazio</Text>
          )}
        </TotalContainer>

        <Button
          isLoading={isLoading}
          onPress={handleConfirmOrder}
          disabled={cartItems.length === 0}
        >
          Confirmar pedido
        </Button>
      </Summary>
    </>
  )
}
