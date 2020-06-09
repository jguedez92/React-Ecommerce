import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'

import theme from './themeConfig.js'
import NavBar from './components/NavBar.jsx'
import Views from './views/Index.jsx'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar/>
        <Views />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
