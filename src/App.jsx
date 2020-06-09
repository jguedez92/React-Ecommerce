import React, { Fragment } from 'react'

import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.css';

import NavBar from './components/NavBar.jsx'
import Views from './views/Index.jsx'

const App = () => {
  return (
      <Fragment>
        <BrowserRouter>
          <NavBar/>
          <Views />
        </BrowserRouter>  
      </Fragment> 
  )
}

export default App
