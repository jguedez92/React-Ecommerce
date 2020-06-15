import React, { useState } from 'react'
import { connect } from 'react-redux'

import ProfileData from './ProfileData'
import AccessData from './AccessData.jsx'
import DocumentsData from './DocumentsData.jsx'


const Profile = ({ user }) => {
    const [userInfo, setUserInfo] = useState(user)
    const [userProfileData, setUserProfileData] = useState(true);
    const [userAccessData, setUserAccessData] = useState(false);
    const [userDocumentsData, setUserDocumentsData] = useState(false);

    const changeProfileView = (view) => {
        setUserProfileData(false)
        setUserAccessData(false)
        setUserDocumentsData(false)
        if (view === 'profileData') {
            setUserProfileData(true)
        }
        if (view === 'AccessData') {
            setUserAccessData(true)
        }
        if (view === 'userDocuments') {
            setUserDocumentsData(true)
        }
    }


    return (
        <div className="container mt-md-4 mb-md-5">
            <div className="row d-flex justify-content-around mb-md-5">
                <div className="col-sm-12 col-md-4 py-md-5">
                    <div className="container rounded shadow-sm py-4 my-5 bg-light">
                        <div className="dropdown-item" onClick={() => changeProfileView('profileData')} style={{ cursor: 'pointer' }}>Datos Personales</div>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-item" onClick={() => changeProfileView('AccessData')} style={{ cursor: 'pointer' }}>Datos de Acceso</div>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-item" onClick={() => changeProfileView('userDocuments')} style={{ cursor: 'pointer' }}>Documentos Personales</div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-7 mb-sm-5 mb-md-5 pb-md-5">
                    {userProfileData && (<ProfileData user={userInfo} />)}
                    {userAccessData && (<AccessData user={userInfo} />)}
                    {userDocumentsData && (<DocumentsData user={userInfo} />)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ user }) => ({ user: user.user });
export default connect(mapStateToProps)(Profile);
