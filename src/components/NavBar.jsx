import React, { Fragment }from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/users.js'
import { notification} from 'antd'
import logo from '../public/images/logo.png'

const NavBar = ({user}) => {

  const disconect = () => {
    logout()
    .then( res=>{
      notification.warning({message:'Desconectado',description:'Se ha cerrado la sesion'})
      
  })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="col-md-12 col-lg-4  d-flex justify-content-between" >
        <NavLink to='/' className="navbar-brand">
          <img src={logo} className="m-0" height="45" alt="logo"/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      
      <div className="col-md-8 d-flex justify-content-center" >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav animated zoomIn" style={{zIndex: 100}}>
            <li className="nav-item mr-2">
              <NavLink to='/' exact className="nav-link" >
                Home
              </NavLink>
            </li>
            <li className="nav-item mr-2">
              <NavLink to='/catalogo' exact className="nav-link" >
                Catalogo
              </NavLink>
            </li>
            <li className="nav-item dropdown mr-2">
              <div className="nav-link dropdown-toggle" href="#" id="faqDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nosotros
              </div>
              <div className="dropdown-menu" aria-labelledby="faqDropdown">
                  <NavLink to='/nosotros' exact className="dropdown-item" >
                      Quienes Somos?
                  </NavLink>
                  <NavLink to='/como_funciona' exact className="dropdown-item" >
                      Como Funciona?
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink to='/covertura_seguro' exact className="dropdown-item" >
                    Covertura Seguro
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink to='/preguntas_frecuentes' exact className="dropdown-item" >
                    Preguntas Frecuentes
                  </NavLink>
              </div>
            </li>
            { user? (
              <li className="nav-item dropdown mr-4 ">
                <div className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Usuario
                </div>
                <div className="dropdown-menu" aria-labelledby="userDropdown">
                  <NavLink to='/perfil' exact className="dropdown-item" >
                    perfil
                  </NavLink>
                  <NavLink to='/mis_motos' exact className="dropdown-item" >
                    Mis Motos
                  </NavLink>
                  <NavLink to='/mis_renting' exact className="dropdown-item" >
                    Mis Renting
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item" onClick={disconect}>
                    Cerrar Sesión
                  </div>
                </div>
              </li>
            ) : (
              <Fragment>
                <li className="nav-item mr-2">
                <NavLink to='/registro' exact className="nav-link" >
                  Registro
                </NavLink>
              </li>
              <li className="nav-item mr-2">
                <NavLink to='/ingreso' exact className="nav-link" >
                  Ingreso
                </NavLink>
              </li>
              </Fragment>
            )}
          </ul>
          </div>
      </div>
    </nav>
  )
}
const mapStateToProps = state => ({ user: state.user.user });
export default connect(mapStateToProps)(NavBar);
