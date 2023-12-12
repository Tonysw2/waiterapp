import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  padding: 14px 28px;

  align-items: center;
  justify-content: center;

  border-radius: 44px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray400 : theme.colors.red};
`

export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.gray100,
}))``
