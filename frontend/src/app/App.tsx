import { Header } from '../components/Header'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'
import { defaultTheme } from '../styles/theme/default'
import { Orders } from '../components/Orders'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Orders />
    </ThemeProvider>
  )
}
