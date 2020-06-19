import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ProfileData from './ProfileData'
import AccessData from './AccessData.jsx'
import DocumentsData from './DocumentsData.jsx'



const Profile = ({ user, history }) => {

    const [userProfileData, setUserProfileData] = useState(false);
    const [userAccessData, setUserAccessData] = useState(false);
    const [userDocumentsData, setUserDocumentsData] = useState(false);

    useEffect(() => {
        setUserProfileData(true)
    }, [])

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
        <Fragment>
            <div className="jumbotron jumbotron-profile jumbotron-fluid d-none d-md-block border-bottom">
                <div className="card col-6 my-5 mx-auto">
                    <h1 className="display-4 font-weight-bold text-center">Perfil de suario</h1>
                </div>
            </div>
            <div className="container mb-md-5">
                <div className="row d-flex justify-content-around mb-md-5">
                    <div className="col-sm-12 col-md-3 my-sm-2 mb-md-5">
                        <div className="container text-center shadow-sm py-3 mb-5 mt-2 bg-light">
                            <h4 className="mx-auto "> MENU </h4>
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-item" onClick={() => changeProfileView('profileData')} style={{ cursor: 'pointer' }}>Datos Personales</div>
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-item" onClick={() => changeProfileView('AccessData')} style={{ cursor: 'pointer' }}>Datos de Acceso</div>
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-item" onClick={() => changeProfileView('userDocuments')} style={{ cursor: 'pointer' }}>Documentos Personales</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8  mb-5 pb-md-5">
                        {userProfileData && (<ProfileData />)}
                        {userAccessData && (<AccessData />)}
                        {userDocumentsData && (<DocumentsData />)}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ user }) => ({ user: user.user });
export default connect(mapStateToProps)(Profile);
