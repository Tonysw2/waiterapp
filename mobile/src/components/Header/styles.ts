import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 24px 24px 0;
`
export const Content = styled.View`
  gap: 24px;
`
export const OrderHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Table = styled.View`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  background-color: ${({ theme }) => theme.colors.gray100};
`
