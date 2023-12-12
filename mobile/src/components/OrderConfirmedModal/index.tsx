import { Modal, ModalProps } from 'react-native'
import { Container, Content, OKButton } from './styles'
import { CheckCircle } from '../Icons/CheckCircle'
import { Text } from '../Text'
import { useTheme } from 'styled-components'

type Props = ModalProps & {
  onOk: () => void
}

export function OrderConfirmedModal({ onOk, ...rest }: Props) {
  const { colors } = useTheme()

  return (
    <Modal animationType="fade" {...rest}>
      <Container>
        <Content>
          <CheckCircle />
          <Text size={18} weight="600" color={colors.gray100}>
            Pedido confirmado
          </Text>
          <Text color={colors.gray100} opacity={0.9}>
            Acompanhe na home o status de produção
          </Text>
        </Content>

        <OKButton onPress={onOk}>
          <Text color={colors.red} weight="600">
            OK
          </Text>
        </OKButton>
      </Container>
    </Modal>
  )
}
