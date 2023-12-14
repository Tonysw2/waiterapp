import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import { Orders } from '../components/Orders'
import { GlobalStyles } from '../styles/GlobalStyles'
import { defaultTheme } from '../styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position="bottom-center" />
    </ThemeProvider>
  )
}
