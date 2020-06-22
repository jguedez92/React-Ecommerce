import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AdminUser from './AdminUser.jsx'
import {  Select, Input, notification, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const AdminUsers = ({ users }) => {

    useEffect(() => {
        setUsersList(users)
    }, [users])

    const { Option } = Select;
    const [admUser, setAdmUser] = useState(false)
    const [loadingStatus, setLoadingStatus] = useState(false)
    const [userData, setUserData] = useState({})
    const [usersList, setUsersList] = useState()
    const { Search } = Input;


    const userView = (user) => {
        setUserData(user)
        setAdmUser(true)
    }
    const returnList = () => {
        setAdmUser(false)
    }

    const setStatusFilter = (value) => {
        setLoadingStatus(true)
        const filter = value.value
        if (filter === null) {
            setUsersList(users)
        }
        const usersFiltered = usersList.filter(user => (user.status_for_renting === filter))
        if (usersFiltered.length > 0) {
            setLoadingStatus(false)
            setUsersList(usersFiltered)
        } else {
            setLoadingStatus(false)
            notification.warning({ message: ' No hay resultados ', description: `No se encontraron usuarios con el estatus ${filter} ` })
        }
    }
    const setEmailFilter = value => {
        setLoadingStatus(true)
        const filter = value
        const usersFiltered = usersList.filter(user => (user.email.includes(filter)))
        if (usersFiltered.length > 0) {
            setLoadingStatus(false)
            setUsersList(usersFiltered)
        } else {
            setLoadingStatus(false)
            notification.warning({ message: ' No hay resultados ', description: `No se encontraron usuarios con el estatus ${filter} ` })
        }
    }
    const deleteFilters = () => {
        setUsersList(users)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 border rounded shadow bg-light my-2 p-3">
                    <div className="my-1">
                        <h3 className="lead-title">Filtros de Busqueda</h3>
                    </div>
                    <div className="row d-flex justify-content-around p-1">
                        <div className="col-sm-12 col-md-4 border py-2 text-center">
                            <strong className="mr-3">Estatus: </strong>
                            <Select labelInValue style={{ width: 160 }} defaultValue={{ key: 'Todos' }} onChange={setStatusFilter} loading={loadingStatus} style={{ width: 200 }}>
                                <Option value={null}>Todos</Option>
                                <Option value="enabled">Habilitado</Option>
                                <Option value="pending">Revision</Option>
                                <Option value="disabled">Deshabilitado</Option>
                            </Select>
                        </div>
                        <div className="col-sm-12 col-md-4 border py-2 text-center">
                            <strong className="mr-3">Email: </strong>
                            <Search prefix={<UserOutlined />} placeholder="input search text"
                                onSearch={value => setEmailFilter(value)}
                                style={{ width: 200 }}
                            />
                        </div>
                        <div className="col-sm-12 col-md-4 border py-2 text-center">
                            <Button onClick={deleteFilters}>
                                Reestablecer Filtros
                                    </Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-md-12 p-1 mb-5">
                    {admUser ? (
                        <AdminUser user={userData} returnList={returnList} />
                    ) : (
                            <table className="table animated bounceInRight my-4">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nombres</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Rol</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersList?.map(user => (
                                        <tr>
                                            <th scope="row">{user.id}</th>
                                            <td><button className="btn btn-link" onClick={() => userView(user)}>
                                                {user.fullName}
                                            </button>
                                            </td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>{user.status_for_renting}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ users: state.user.users });
export default connect(mapStateToProps)(AdminUsers);

