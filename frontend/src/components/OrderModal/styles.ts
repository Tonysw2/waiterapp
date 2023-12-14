import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
`

export const ModalBody = styled.div`
  width: 480px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray100};

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > strong {
      font-size: 24px;
    }

    & > button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
      background-color: transparent;
    }
  }

  .order-status {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > small {
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > strong {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .product-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .product-item {
    display: flex;
    align-items: center;
    gap: 12px;

    & > img {
      border-radius: 6px;
    }

    & > div {
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }
  }

  .product-quantity {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray400};
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    & > span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray500};
    }
  }

  .total-section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > button {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  & > button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn-cancel {
    padding: 14px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: transparent;

    color: ${({ theme }) => theme.colors.red};
  }

  .btn-confirm {
    padding: 14px 28px;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 44px;
    background-color: ${({ theme }) => theme.colors.gray600};

    & > strong {
      color: ${({ theme }) => theme.colors.gray100};
    }
  }
`
