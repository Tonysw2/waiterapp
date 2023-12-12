import styled from 'styled-components/native'

export const Image = styled.ImageBackground`
  height: 200px;
  width: 100%;
`

export const CloseButton = styled.TouchableOpacity`
  height: 32px;
  width: 32px;

  position: absolute;
  top: 24px;
  right: 24px;

  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 999px;
`

export const ModalBody = styled.View`
  flex: 1;
  padding: 32px 24px 0;
  background-color: ${({ theme }) => theme.colors.gray200};
`

export const Header = styled.View`
  gap: 8px;
`

export const IngredientsContainer = styled.View`
  margin-top: 32px;
  flex: 1;
`

export const Ingredient = styled.View`
  padding: 16px;

  flex-direction: row;
  align-items: center;
  gap: 20px;

  border-radius: 8px;
  border: 1px solid rgba(204, 204, 204, 0.3);
`

export const Footer = styled.View`
  min-height: 110px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.gray100};
`

export const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PriceContainer = styled.View``
