import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;

  display: flex;
  gap: 32px;

  @media (max-width: 1280px) {
    padding: 0 24px;
  }
`
