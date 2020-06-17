import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const MyBikes = ({ user }) => {
    console.log(user)
    return (
        <Fragment>
            <div className="jumbotron jumbotron-profile jumbotron-fluid d-none d-md-block border-bottom">
                <div className="card col-6 my-5 mx-auto">
                    <h1 className="display-4 font-weight-bold text-center">Mis Motos</h1>
                </div>
            </div>
            <div className="container mb-5">
                <div >
                    <button className="btn btn-outline-info mt-2 ">
                        <NavLink to='/agregar_moto'>
                            Agregar Moto
                        </NavLink>
                    </button>
                </div>
                <div className="row d-flex justify-content-center">

                    {user.product < 1 ? (
                        <div className="col-12">
                            No hay Motos registradas con este usuario
                        </div>
                    ) : (
                            user.product.map(product => (
                                <div className="col-sm-12 col-md-4 mt-3">
                                    <div className="card">
                                        <div className="card-header" id={"heading" + product.id}>
                                            <div className="row pr-3">
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={'#' + product.id} aria-expanded="true" aria-controls="collapseOne">
                                                        {product.brand} - {product.model}
                                                    </button>
                                                </h2>
                                                {product.status_for_renting === 'enabled' && (
                                                    <strong className="text-success ml-auto mt-2">
                                                        Disponible
                                                    </strong>
                                                )}
                                                {product.status_for_renting === 'renting' && (
                                                    <strong className="text-info ml-auto mt-2">
                                                        Rentado
                                                    </strong>
                                                )}
                                                {product.status_for_renting === 'pending' && (
                                                    <strong className="text-warning ml-auto mt-2">
                                                        En Revision
                                                    </strong>
                                                )}
                                                {product.status_for_renting === 'disabled' && (
                                                    <strong className="text-warning ml-auto mt-2">
                                                        Deshabilitado
                                                    </strong>
                                                )}
                                            </div>
                                        </div>

                                        <div id={product.id} className="collapse show" aria-labelledby={"heading" + product.id} data-parent="#accordionBikes">
                                            <div className="card-body">
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        Motor: {product.motor}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Categoria: {product.category.name}
                                                    </li>
                                                    <li className="list-group-item">
                                                        Ubicación: {product.city}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))
                        )}
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ user }) => ({ user: user.user });
export default connect(mapStateToProps)(MyBikes);
