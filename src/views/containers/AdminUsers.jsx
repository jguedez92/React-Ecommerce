import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from '../../redux/actions/users.js'
import AdminUser from './AdminUser.jsx'
import { Skeleton } from 'antd';
const AdminUsers = ({ users }) => {

    useEffect(() => {
        
        getAllUsers()
            
    }, [])
    const [admUser, setAdmUser] = useState(false);
    const [userData, setUserData] = useState({})
    const allUsers = users

    const userView = (user) => {
        setUserData(user)
        setAdmUser(true)
    }
    const returnList = () => {
        setAdmUser(false)
    }

    return (
        <div className="container">
            { !allUsers ? (
                <div className="row py-5">
                    <div className="container my-4">
                        <Skeleton active />
                        <Skeleton active />
                    </div>
                </div>
                
            ) : (
                    <div className="row">
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
                                            {allUsers?.map(user => (
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
                )}

        </div>
    )
}

const mapStateToProps = state => ({ users: state.user.users });
export default connect(mapStateToProps)(AdminUsers);

