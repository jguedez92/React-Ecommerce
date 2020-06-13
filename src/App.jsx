import React, { Fragment } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import 'antd/dist/antd.css';

import NavBar from './components/NavBar.jsx'
import Views from './views/index.jsx'

const App = ({user}) => {
  return (
      <Fragment>
        <BrowserRouter>
          <NavBar/>
          <Views />
        </BrowserRouter>  
      </Fragment> 
  )
}
const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(App);