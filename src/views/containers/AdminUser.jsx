import React, { useEffect, useState } from 'react'
import { IMAGES_URL } from '../../api-config'
import { Button, notification, Select } from 'antd'
import { updateUser, getAllUsers } from '../../redux/actions/users.js'

const AdminUser = (props) => {
    const user = props.user
    const returnList = props.returnList
    const [licenseValue, setLicenseValue] = useState()
    const [roleValue, setRoleValue] = useState()
    const [statusValue, setStatusValue] = useState()
    const [loadingLicense, setLoadingLicense] = useState(false)
    const [loadingRole, setLoadingRole] = useState(false)
    const [loadingStatus, setLoadingStatus] = useState(false)

    useEffect(() => {
        if (licenseValue !== undefined) {
            const data = {
                license: licenseValue
            }
            setLoadingLicense(true)
            updateUser(data, user.id)
                .then(res => {
                    getAllUsers()
                    setLoadingLicense(false)
                    notification.success({ message: 'Actualizado', description: 'se ha cambiado la licencia de manera satisfactoria' })
                })
                .catch(error => {
                    setLoadingLicense(false)
                    notification.success({ message: 'Error', description: 'Ha ocurrido un error, intentelo más tarde' })
                })
        }
        if (roleValue !== undefined) {
            const data = {
                role: roleValue
            }
            setLoadingRole(true)
            updateUser(data, user.id)
                .then(res => {
                    getAllUsers()
                    setLoadingRole(false)
                    notification.success({ message: 'Actualizado', description: 'se ha cambiado el rol de usuario de manera satisfactoria' })
                })
                .catch(error => {
                    setLoadingRole(false)
                    notification.success({ message: 'Error', description: 'Ha ocurrido un error, intentelo más tarde' })
                })
        }
        if (statusValue !== undefined) {
            const data = {
                status_for_renting: statusValue
            }
            setLoadingStatus(true)
            updateUser(data, user.id)
                .then(res => {
                    getAllUsers()
                    setLoadingStatus(false)
                    notification.success({ message: 'Actualizado', description: 'se ha cambiado el estatus de manera satisfactoria' })
                })
                .catch(error => {
                    setLoadingStatus(false)
                    notification.success({ message: 'Error', description: 'Ha ocurrido un error, intentelo más tarde' })
                })
        }
    }, [licenseValue, roleValue, statusValue])


    const { Option } = Select;

    const setLicense = (value) => {
        setLicenseValue(value.value)
    }
    const setRole = (value) => {
        setRoleValue(value.value)
    }
    const setStatus = (value) => {
        setStatusValue(value.value)
    }

    return (
        <div className="row d-flex justify-content-center align-items-center p-2 my-4">
            <div className="col-sm-12 col-md-6">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {user.profile_image_path ?
                                (<img src={IMAGES_URL + 'users/' + user.profile_image_path} className="d-block img-thumbnail w-100" alt="..." />)
                                : (<img src={'https://www.motor.mapfre.es/wp-content/uploads/2018/05/default-img-1-352x224.gif'} className="d-block img-fluid w-100" alt="..." />)}
                        </div>
                        <div className="carousel-item">
                            {user.dni_image_path ?
                                (<img src={IMAGES_URL + 'users/' + user.dni_image_path} className="d-block img-thumbnail w-100" alt="..." />)
                                : (<img src={'https://www.motor.mapfre.es/wp-content/uploads/2018/05/default-img-1-352x224.gif'} className="d-block img-fluid w-100" alt="..." />)}
                        </div>
                        <div className="carousel-item">
                            {user.license_image_path ?
                                (<img src={IMAGES_URL + 'users/' + user.license_image_path} className="d-block img-thumbnail w-100" alt="..." />)
                                : (<img src={'https://www.motor.mapfre.es/wp-content/uploads/2018/05/default-img-1-352x224.gif'} className="d-block img-fluid w-100" alt="..." />)}
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 p-5">
                <div className="card">
                    <div className="card-header">

                    </div>
                    <div className="card-body p-3">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-start">

                                <strong className="mr-3">Nombres: </strong>  {user.fullName}

                            </li>
                            <li className="list-group-item d-flex justify-content-start">

                                <strong className="mr-3">Email: </strong>  {user.email}

                            </li>
                            <li className="list-group-item d-flex justify-content-start">

                                <strong className="mr-3">Estatus: </strong>  {user.status_for_renting}

                            </li>
                            <li className="list-group-item d-flex justify-content-start">

                                <strong className="mr-3">Licencia: </strong>
                                <Select labelInValue style={{ width: 120 }} defaultValue={{ key: user.license }} onChange={setLicense} loading={loadingLicense} >
                                    <Option value={null}>Sin Asignar</Option>
                                    <Option value="A1">A1</Option>
                                    <Option value="A2">A2</Option>
                                    <Option value="A">A</Option>
                                </Select>

                            </li>
                            <li className="list-group-item d-flex justify-content-start">

                                <strong className="mr-3">Rol: </strong>
                                <Select labelInValue style={{ width: 160 }} defaultValue={{ key: user.role }} onChange={setRole}
                                    loading={loadingRole} >
                                    <Option value="user">Usuario</Option>
                                    <Option value="admin">Administrador</Option>
                                </Select>
                            </li>
                            <li className="list-group-item d-flex justify-content-start">

                                <strong className="mr-3">Estatus: </strong>
                                <Select labelInValue style={{ width: 160 }} defaultValue={{ key: user.status_for_renting }} onChange={setStatus} loading={loadingStatus}>
                                    <Option value="enabled">Habilitado</Option>
                                    <Option value="pending">Revision</Option>
                                    <Option value="disabled">Deshabilitado</Option>
                                </Select>
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer p-3">
                        <div className="row d-flex justify-content-around">
                            <Button onClick={returnList}>
                                volver al listado
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default AdminUser

