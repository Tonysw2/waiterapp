import { Platform } from 'react-native'
import styled from 'styled-components/native'

const isAndroid = Platform.OS === 'android'

export const Category = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`

export const Icon = styled.View`
  height: 44px;
  width: 44px;
  margin-bottom: 8px;

  align-items: center;
  justify-content: center;

  background-color: #fff;
  border-radius: 999px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 2;
`
