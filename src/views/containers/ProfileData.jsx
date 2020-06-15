import React from 'react'
import { Avatar } from 'antd';

const ProfileData = (props) => {

    const user = props.user
    console.log(user)

    return (
        <div className="row p-1 d-flex justify-content-center">
            <div className="card shadow-sm animated bounceInRight">
                <div className="card-body">
                    <div className="row d-flex">
                        <div className="col-4 border-right">
                            <div className="row d-flex justify-content-center">
                                <div className="mt-2">
                                    {user.profile_image_path ? (
                                        <div>
                                            <Avatar size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                        </div>
                                    ) : (
                                            <Avatar className=" d-flex justify-content-center align-items-center" size={90} style={{ color: '#000', backgroundColor: '#698EB8' }}>
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
                                            <strong>Grado de Licencia: &nbsp;</strong> {user.licence ? (user.licence) : ('No hay Licencia Cargada')}
                                        </div>
                                        <div className="col-12 d-flex my-2">
                                            <strong>Estatus para rentar: &nbsp;</strong>
                                            {user.status_for_renting === 'disabled' ?
                                                (<strong className="text-warning">Inactivo</strong>) :
                                                (<strong className="text-success">Activado</strong>)}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {user.status_for_renting === 'disabled' &&
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

        </div>
    )
}

export default ProfileData
