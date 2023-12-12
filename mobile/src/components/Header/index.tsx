import { TouchableOpacity } from 'react-native'

import { Text } from '../Text'

import { Container, Content, OrderHeader, Table } from './styles'
import { useTheme } from 'styled-components/native'
import React from 'react'

type Props = {
  selectedTable: string | null
  onCancelOrder: () => void
}

export function Header({ selectedTable, onCancelOrder }: Props) {
  const theme = useTheme()

  return (
    <Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.9}>
            Bem vindo(a) ao
          </Text>
          <Text size={24} weight="700">
            WAITER<Text size={24}>APP</Text>
          </Text>
        </>
      )}

      {selectedTable && (
        <Content>
          <OrderHeader>
            <Text size={24} weight="600">
              Pedido
            </Text>

            <TouchableOpacity onPress={onCancelOrder}>
              <Text size={14} weight="600" color={theme.colors.red}>
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <Text color={theme.colors.gray500}>Mesa {selectedTable}</Text>
          </Table>
        </Content>
      )}
    </Container>
  )
}
