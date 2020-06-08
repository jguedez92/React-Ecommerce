import React, { Fragment } from 'react';

import {ThemeProvider, makeStyles} from '@material-ui/core'
import theme from './themeConfig.js'

import NavBar from './components/navBar/NavBar.jsx'

const styles = makeStyles(theme => ({
  root:{
    display: 'flex'
  }
}))

function App() {
  const classes = styles();
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Fragment classNam={classes.root}>
    
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
