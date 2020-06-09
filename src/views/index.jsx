import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import BikeInsurance from './All/BikeInsurance'
import Catalog from './All/Catalog.jsx'
import Faq from './All/Faq.jsx'
import Home from './All/Home.jsx'
import HowToDo from './All/HowToDo.jsx'
import MyBikes from './All/MyBikes.jsx'
import MyRenting from './All/MyRenting.jsx'
import Profile from './All/Profile.jsx'
import Questions from './All/Questions.jsx'
import Register from './All/Register.jsx'
import Login from './All/Login.jsx'

const Views = () => {
    
    return (
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/covertura_seguro' component={BikeInsurance} exact />
        <Route path='/catalogo' component={Catalog} exact />
        <Route path='/nosotros' component={Faq} exact />
        <Route path='/como_funciona' component={HowToDo} exact />
        <Route path='/mis_motos' component={MyBikes} exact />
        <Route path='/mis_renting' component={MyRenting} exact />
        <Route path='/perfil' component={Profile} exact />
        <Route path='/preguntas_frecuentes' component={Questions} exact />
        <Route path='/registro' component={Register} exact />
        <Route path='/ingreso' component={Login} exact />
      </Switch>
    )
}

export default Views
