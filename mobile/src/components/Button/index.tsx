import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Text } from '../Text'
import { Container, Loader } from './styles'

type Props = TouchableOpacityProps & {
  isLoading?: boolean
  children: ReactNode
}

export function Button({ children, disabled, isLoading, ...rest }: Props) {
  return (
    <Container disabled={disabled || isLoading} {...rest}>
      {!isLoading && (
        <Text weight="600" color="#fff">
          {children}
        </Text>
      )}

      {isLoading && <Loader />}
    </Container>
  )
}
