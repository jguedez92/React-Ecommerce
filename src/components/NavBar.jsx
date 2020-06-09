import React, { Fragment, useState }from 'react'

const NavBar = () => {
  const [userExist, setUserExist] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="col-sm-8 col-md-6  d-flex" >
        <a className="navbar-brand" href="#">Navbar</a>
        
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="col-md-6 d-flex justify-content-end" >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Catalogo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                
              </a>
            </li>
            { userExist? (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Usuario
                </a>
                <div className="dropdown-menu" aria-labelledby="userDropdown">
                  <a className="dropdown-item" href="#">Perfil</a>
                  <a className="dropdown-item" href="#">Mis Motos</a>
                  <a className="dropdown-item" href="#">Mis Rentas</a>
                </div>
              </li>
            ) : (
              <Fragment>
                <li className="nav-item">
                <a className="nav-link" href="#">
                  Registro
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ingreso
                </a>
              </li>
              </Fragment>
            )}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="faqDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nosotros
              </a>
              <div className="dropdown-menu" aria-labelledby="faqDropdown">
                <a className="dropdown-item" href="#">Quienes somos</a>
                <a className="dropdown-item" href="#">Como Funciona</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Covertura de Seugro</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Preguntas Frecuentes</a>
              </div>
            </li>
          </ul>
          </div>
      </div>
    </nav>
  )
}

export default NavBar
