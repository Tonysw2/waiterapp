import styled from 'styled-components'

export const Board = styled.div`
  flex: 1;

  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  border: 1px solid rgba(204, 204, 204, 0.4);

  & > header {
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 14px;
  }
`

export const OrdersContainer = styled.div`
  width: 100%;
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  & > button {
    height: 128px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    background-color: ${({ theme }) => theme.colors.gray100};

    & > strong {
      font-weight: 500;
    }

    & > span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray500};
    }
  }
`
