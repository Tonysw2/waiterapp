import styled from 'styled-components/native'

export const Product = styled.TouchableOpacity`
  flex-direction: row;
  gap: 14px;
  align-items: center;
`

export const Image = styled.Image`
  height: 96px;
  width: 120px;
  border-radius: 8px;
`

export const ProductDetails = styled.View`
  flex: 1;
  gap: 8px;
`

export const Separator = styled.View`
  margin: 24px 0;
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray400}40;
`

export const AddToCartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
`
