import React from 'react'
import { Avatar, Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import imgDefault from '../../public/images/imgDefault.png'
import { refreshUser } from '../../redux/actions/users'
import { connect } from 'react-redux'
import { IMAGES_URL } from '../../api-config';

const DocumentsData = ({ user }) => {

    const propsProfile = {
        name: 'profileImage',
        action: 'http://127.0.0.1:8000/api/users/uploadImgProfile',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        },

        onChange(info) {
            if (info.file.status !== 'uploading') {
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`)
                refreshUser()
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`)
            }
        },
    };
    const propsDni = {
        name: 'dniImage',
        action: 'http://127.0.0.1:8000/api/users/uploadImgDni',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        },

        onChange(info) {
            if (info.file.status !== 'uploading') {

            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`)
                refreshUser()
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`)
            }
        },
    };
    const propsLicense = {
        name: 'licenseImage',
        action: 'http://127.0.0.1:8000/api/users/uploadImgLicense',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        },

        onChange(info) {
            if (info.file.status !== 'uploading') {

            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`)
                refreshUser()
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`)
            }
        },
    };
    return (
        <div className="container">
            <div className="row">
                <div className="card shadow-sm animated bounceInRight p-3 my-3" style={{ width: 450 }}>
                    <div className="container py-2">
                        <div className="row">
                            <div className="col-4 border-right">
                                <div className="row d-flex justify-content-center">
                                    {user.profile_image_path ? (
                                        <div>
                                            <Avatar size={100} src={IMAGES_URL + 'users/' + user.profile_image_path} />
                                        </div>
                                    ) : (
                                            <Avatar className=" d-flex justify-content-center align-items-center" size={90} style={{ color: '#000', backgroundColor: '#698EB8' }}>
                                                {user.fullName[0].toUpperCase()}
                                            </Avatar>
                                        )}
                                </div>
                            </div>
                            <div className="col-8 pl-4 mb-2">
                                <div className="card-title ">
                                    <h5> Imagen de perfil</h5>
                                </div>
                                <div className="card-body p-2 ">
                                    <Upload className="mt-2" {...propsProfile}>
                                        <Button className="mx-auto">
                                            <UploadOutlined /> Click to Upload
                                    </Button>
                                    </Upload>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow-sm animated bounceInRight p-3 my-3" style={{ width: 450 }}>
                    <div className="container py-2">
                        <div className="row">
                            <div className="col-4 border-right">
                                <div className="row d-flex justify-content-center">
                                    {user.dni_image_path ? (
                                        <div>
                                            <div className="container">
                                                <img className="my-2" src={IMAGES_URL + 'users/' + user.dni_image_path} width="100" alt="" />
                                            </div>
                                        </div>
                                    ) : (
                                            <div>
                                                <div className="container">
                                                    <img src={imgDefault} width="100" alt="" />
                                                </div>
                                            </div>
                                        )}
                                </div>
                            </div>
                            <div className="col-8 pl-4 mb-2">
                                <div className="card-title ">
                                    <h5> Imagen de Dni</h5>
                                </div>
                                <div className="card-body p-2 ">
                                    <Upload className="mt-2" {...propsDni}>
                                        <Button className="mx-auto">
                                            <UploadOutlined /> Click to Upload
                                    </Button>
                                    </Upload>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow-sm animated bounceInRight p-3 my-3" style={{ width: 450 }}>
                    <div className="container py-2">
                        <div className="row">
                            <div className="col-4 border-right">
                                <div className="row d-flex justify-content-center">
                                    {user.license_image_path ? (
                                        <div>
                                            <div className="container">
                                                <img className="my-2" src={IMAGES_URL + 'users/' + user.license_image_path} width="100" alt="" />
                                            </div>
                                        </div>
                                    ) : (
                                            <div>
                                                <div className="container">
                                                    <img src={imgDefault} width="100" alt="" />
                                                </div>
                                            </div>
                                        )}
                                </div>
                            </div>
                            <div className="col-8 pl-4 mb-2">
                                <div className="card-title ">
                                    <h5> Imagen de Licencia</h5>
                                </div>
                                <div className="card-body p-2 ">
                                    <Upload className="mt-2" {...propsLicense}>
                                        <Button className="mx-auto">
                                            <UploadOutlined /> Click to Upload
                                    </Button>
                                    </Upload>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({ user: state.user.user });
export default connect(mapStateToProps)(DocumentsData);


