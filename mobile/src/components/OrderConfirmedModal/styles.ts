import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};
`

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  gap: 6px;
`

export const OKButton = styled.TouchableOpacity`
  margin-top: 24px;
  padding: 14px 28px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.gray100};
`
