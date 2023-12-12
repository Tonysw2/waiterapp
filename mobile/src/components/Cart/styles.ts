import styled from 'styled-components/native'

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`

export const ProductInfo = styled.View`
  flex-direction: row;
`

export const Image = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 8px;
`

export const QuantityContainer = styled.View`
  margin-left: 12px;
  min-width: 20px;
`

export const ProductDetails = styled.View`
  gap: 4px;
`

export const Actions = styled.View`
  flex-direction: row;
`

export const ActionButton = styled.TouchableOpacity`
  padding: 10px;
`

export const Summary = styled.View`
  padding: 16px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`

export const TotalContainer = styled.View`
  flex: 1;
`
