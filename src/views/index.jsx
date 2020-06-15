import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BikeInsurance from './containers/BikeInsurance'
import Catalog from './containers/Catalog.jsx'
import Faq from './containers/Faq.jsx'
import Home from './containers/Home.jsx'
import HowToDo from './containers/HowToDo.jsx'
import MyBikes from './containers/MyBikes.jsx'
import MyRenting from './containers/MyRenting.jsx'
import Profile from './containers/Profile.jsx'
import Questions from './containers/Questions.jsx'
import Register from './containers/Register.jsx'
import Login from './containers/Login.jsx'
import Confirmation from './containers/Confirmation.jsx'

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
        <Route path='/confirmation' component={Confirmation} exact />
      </Switch>
    )
}

export default Views
