import { Modal, ModalProps, Platform, TouchableOpacity } from 'react-native'

import { useTheme } from 'styled-components'
import { Form, Header, Input, ModalBody, Overlay } from './styles'

import { Text } from '../Text'
import { Button } from '../Button'
import { Close } from '../Icons/Close'
import { useState } from 'react'

type Props = ModalProps & {
  onClose: () => void
  onSave: (table: string) => void
}

export function TableModal({ onClose, onSave, ...rest }: Props) {
  const theme = useTheme()
  const [table, setTable] = useState('')

  function handleSave() {
    setTable('')
    onSave(table)
    onClose()
  }

  return (
    <Modal transparent animationType="fade" {...rest}>
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color={theme.colors.gray500} />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              value={table}
              onChangeText={setTable}
              keyboardType="number-pad"
              placeholder="Número da mesa"
              placeholderTextColor={theme.colors.gray500}
            />

            <Button disabled={table.length === 0} onPress={handleSave}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  )
}
