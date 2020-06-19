import React from 'react'
import { Avatar } from 'antd';
import { connect } from 'react-redux'
import { IMAGES_URL } from '../../api-config';


const ProfileData = ({ user }) => {
    return (
        <div className="row p-1 d-flex justify-content-center">
            <div className="card shadow animated bounceInRight">
                <div className="card-body">
                    <div className="row d-flex">
                        <div className="col-3 border-right">
                            <div className="row d-block text-center">
                                <div className=" my-2 d-flex justify-content-center">
                                    {user.profile_image_path ? (
                                        <Avatar size={100} src={IMAGES_URL + 'users/' + user.profile_image_path} />
                                    ) : (
                                            <Avatar className=" d-flex justify-content-center align-items-center" size={100} style={{ color: '#000', backgroundColor: '#698EB8' }}>
                                                {user.fullName[0].toUpperCase()}
                                            </Avatar>

                                        )}
                                </div>
                                <h6 className="mb-2">{user.fullName}</h6>
                            </div>
                        </div>
                        <div className="col-8 ">
                            <div clasName="row d-flex justify-content-center">
                                <div className="container my-2">
                                    <div className="row">
                                        <div className="col-12 d-flex my-2">
                                            <strong>Correo: &nbsp;</strong> {user.email}
                                        </div>
                                        <div className="col-12 d-flex my-2">
                                            <strong>Grado de Licencia: &nbsp;</strong> {user.license ? (user.license) : ('No hay Licencia Cargada')}
                                        </div>
                                        <div className="col-12 d-flex my-2">
                                            <strong>Estatus para rentar: &nbsp;</strong>
                                            {user.status_for_renting === 'disabled' &&
                                                (<strong className="text-error">Inactivo</strong>)}
                                            {user.status_for_renting === 'pending' &&
                                                (<strong className="text-warning">Pendiente de Activación</strong>)}
                                            {user.status_for_renting === 'enabled' &&
                                                (<strong className="text-success">Activado</strong>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {user.status_for_renting === 'pending' &&
                (
                    <div className="alert alert-warning mt-4 animated bounceInUp">
                        <strong>Debe Cargar sus documentos!</strong>
                        <p className="text-justify">
                            Para habilitar su usuario para rentar una moto debe cargar sus documentos
                            (licencia de conducir, documento de identidad y su imagen de perfil) en la
                        seccion de <b>Documentos Personales</b> de su perfil.
                    </p>
                    </div>
                )}
            {user.status_for_renting === 'disabled' &&
                (
                    <div className="alert alert-danger mt-4 animated bounceInUp">
                        <strong>Su cuenta está temporalmente suspendida!</strong>
                        <p className="text-justify">
                            Para habilitar su usuario debe escribir un mensaje
                            al equipo de soporte a través de la seccion de <b>Preguntas Frecuentes</b>.
                    </p>
                    </div>
                )}
            {user.status_for_renting === 'enabled' &&
                (
                    <div className="alert alert-success mt-4 animated bounceInUp">
                        <strong>Su cuenta esta Habilitada!</strong>
                        <p className="text-justify">
                            Su cuenta esta actualmente habilitada para rentar motocicletas, asi que
                            GO RIDE!
                        </p>
                    </div>
                )}

        </div>
    )
}
const mapStateToProps = state => ({ user: state.user.user });
export default connect(mapStateToProps)(ProfileData);


