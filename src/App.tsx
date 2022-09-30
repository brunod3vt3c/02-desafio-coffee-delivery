import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeeCartContextProvider } from './context/CoffeeCartContextProvider'

import { Router } from './Routes'
import { defaultTheme } from './styles/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CoffeeCartContextProvider>
          <Router />
        </CoffeeCartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
