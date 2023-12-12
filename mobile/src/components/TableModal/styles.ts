import styled from 'styled-components/native'

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 0 24px;
  align-items: stretch;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`

export const ModalBody = styled.View`
  padding: 24px;
  gap: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray200};
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Form = styled.View`
  gap: 24px;
`

export const Input = styled.TextInput`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  background-color: ${({ theme }) => theme.colors.gray100};
`
