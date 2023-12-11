import styled from 'styled-components'

export const Container = styled.header`
  height: 198px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.red};

  .page-details {
    & > h1 {
      font-size: 32px;
      color: ${({ theme }) => theme.colors.gray100};
    }

    & > h2 {
      margin-top: 6px;

      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray100};
      opacity: 0.9;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
