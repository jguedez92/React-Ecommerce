import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'

import theme from './themeConfig.js'
import NavBar from './components/NavBar.jsx'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
    </ThemeProvider>
  )
}

export default App
