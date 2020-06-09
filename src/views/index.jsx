import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './All/Home.jsx'
import Profile from './All/Profile.jsx'

const Views = () => {
    
    return (
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/profile' component={Profile} exact />
      </Switch>
    )
}

export default Views
