import { FlatList, Modal, ModalProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { ProductType } from '../../@types/ProductType'

import {
  CloseButton,
  Footer,
  FooterContainer,
  Header,
  Image,
  Ingredient,
  IngredientsContainer,
  ModalBody,
  PriceContainer,
} from './styles'

import { Text } from '../Text'
import { Close } from '../Icons/Close'
import { Button } from '../Button'

import { formatCurrency } from '../../utils/formatCurrency'
import React from 'react'

type Props = ModalProps & {
  product: ProductType | null
  onClose: () => void
  onAddToCart: (product: ProductType) => void
}

export function ProductModal({
  product,
  onClose,
  onAddToCart,
  ...rest
}: Props) {
  const { colors } = useTheme()

  if (!product) {
    return null
  }

  function handleAddToCart() {
    onAddToCart(product!)
    onClose()
  }

  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
      {...rest}
    >
      <Image
        source={{
          uri: `http://192.168.0.113:3001/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight="600">
            {product.name}
          </Text>
          <Text color={colors.gray500}>{product.description}</Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color={colors.gray500}>
              Ingredients
            </Text>

            <FlatList
              data={product.ingredients}
              style={{ marginTop: 16 }}
              contentContainerStyle={{ gap: 4 }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(ingredient) => ingredient._id}
              renderItem={({ item: ingredient }) => {
                return (
                  <Ingredient>
                    <Text>{ingredient.icon}</Text>
                    <Text size={14} color={colors.gray500}>
                      {ingredient.name}
                    </Text>
                  </Ingredient>
                )
              }}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color={colors.gray500}>Preço</Text>
            <Text size={20} weight="600">
              {formatCurrency(product.price)}
            </Text>
          </PriceContainer>

          <Button onPress={handleAddToCart}>Adicionar ao pedido</Button>
        </FooterContainer>
      </Footer>
    </Modal>
  )
}
