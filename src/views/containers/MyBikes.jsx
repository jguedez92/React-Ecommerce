import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Upload, message, Button, notification, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { IMAGES_URL } from '../../api-config';
import imgDefault from '../../public/images/imgDefault.png'
import { deleteProduct } from '../../redux/actions/products'
import { refreshUser } from '../../redux/actions/users'
import UpdateBike from './UpdateBike'

const MyBikes = ({ user }) => {
    const props = {
        name: 'file',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        },
        onChange(info) {
            if (info.file.status === 'done') {
                notification.success({ message: 'Cargado', description: `${info.file.name} archivo cargado satisfactoriamente` })
                refreshUser()
            } else if (info.file.status === 'error') {
                notification.error({ message: 'Error', description: `${info.file.name} - Ha ocurrido un error al cargar el archivo.` })
            }
        },
    };

    function confirm(id) {
        deleteProduct(id)
            .then(res => {
                notification.success({ message: 'Eliminado', description: 'Producto eliminado satisfactoriamente' })
                refreshUser()
            })
            .catch(error => {
                notification.error({ message: 'Error', description: 'Ha ocurrido un error' })
            })
    }

    function cancel(e) {
        message.error('Cancelado');
    }


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
                <div className="row d-flex justify-content-center ">

                    {user.product < 1 ? (
                        <div className="row d-flex justify-content-center align-items-center animated bounceInLeft shadow" style={{ height: 450 }}>
                            <div className="card card-empty">
                                <div className="card-body p-4">
                                    <span className="mr-2">
                                        <svg class="bi bi-clock" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" />
                                            <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                    </span>
                                No hay Motos Registradas...
                            </div>
                            </div>
                        </div>
                    ) : (
                            user.product.map(product => (
                                <div className="col-sm-12 col-md-6 mt-3">
                                    <div className="card animated zoomIn">
                                        <div className="card-header" id={"heading" + product.id}>
                                            <div className="row pr-3">
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left" type="button" >
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
                                        <div className="card-body">
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-sm-12">
                                                    <div className="col-sm-12  ">
                                                        <div id={"carousel" + product.id} className="carousel slide" data-ride="carousel">
                                                            <ol className="carousel-indicators">
                                                                <li data-target={"#carousel" + product.id} data-slide-to="0" className="active"></li>
                                                                <li data-target={"#carousel" + product.id} data-slide-to="1"></li>
                                                                <li data-target={"#carousel" + product.id} data-slide-to="2"></li>
                                                                <li data-target={"#carousel" + product.id} data-slide-to="3"></li>
                                                            </ol>
                                                            <div className="carousel-inner">
                                                                <div className="carousel-item active">
                                                                    {product.image_path_1 ?
                                                                        (<img src={IMAGES_URL + 'products/' + product.image_path_1} className="d-block img-thumbnail w-100" alt="..." />)
                                                                        : (<img src={imgDefault} className="d-block img-thumbnail w-100" alt="..." />)}
                                                                </div>
                                                                <div className="carousel-item">
                                                                    {product.image_path_2 ?
                                                                        (<img src={IMAGES_URL + 'products/' + product.image_path_2} className="d-block img-thumbnail w-100" alt="..." />)
                                                                        : (<img src={imgDefault} className="d-block img-thumbnail w-100" width="400" alt="..." />)}
                                                                </div>
                                                                <div className="carousel-item">
                                                                    {product.image_path_3 ?
                                                                        (<img src={IMAGES_URL + 'products/' + product.image_path_3} className="d-block img-thumbnail w-100" alt="..." />)
                                                                        : (<img src={imgDefault} className="d-block img-thumbnail w-100" alt="..." />)}
                                                                </div>
                                                                <div className="carousel-item">
                                                                    {product.image_path_4 ?
                                                                        (<img src={IMAGES_URL + 'products/' + product.image_path_4} className="d-block img-thumbnail w-100" alt="..." />)
                                                                        : (<img src={imgDefault} className="d-block img-thumbnail w-100" alt="..." />)}
                                                                </div>
                                                            </div>
                                                            <a className="carousel-control-prev" href={"#carousel" + product.id} role="button" data-slide="prev">
                                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a className="carousel-control-next" href={"#carousel" + product.id} role="button" data-slide="next">
                                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </div>


                                                    </div>
                                                    <div className="col-sm-12 ">
                                                        <ul className="list-group">
                                                            <li className="list-group-item d-flex justify-content-around">
                                                                <div>
                                                                    <strong>Marca: </strong>  {product.brand}
                                                                </div>
                                                                <div >
                                                                    <strong>Modelo: </strong>  {product.model}
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item d-flex justify-content-around">
                                                                <div>
                                                                    <strong>Motor: </strong>  {product.motor}
                                                                </div>
                                                                <div>
                                                                    <strong>Categoria: </strong>  {product.category.name}
                                                                </div>

                                                            </li>
                                                            <li className="list-group-item d-flex justify-content-around">
                                                                <div >
                                                                    <strong>Año: </strong>  {product.year}
                                                                </div>
                                                                <div>
                                                                    <strong>Ubicacion: </strong>  {product.city[0].toUpperCase() + product.city.substring(1)}
                                                                </div>
                                                                <div >
                                                                    <strong>Licencia: </strong>  {product.required_license}
                                                                </div>
                                                            </li>
                                                            <li className="list-group-item d-flex justify-content-around">
                                                                <div>
                                                                    <strong>Descipción: &nbsp;</strong>  {product.description}.
                                                                    </div>
                                                            </li>
                                                            <li className="list-group-item d-flex justify-content-around">
                                                                <div >
                                                                    <strong>Precio por día: </strong>  {product.price} €
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer p-3">
                                            <div className="row d-flex justify-content-around">
                                                <button className="btn btn-outline-info" data-toggle="modal" data-target={'#modalImg' + product.id}>
                                                    Cambiar Imagen
                                                </button>
                                                {product.status_for_renting !== 'renting' && (
                                                    <button className="btn btn-outline-info" data-toggle="modal" data-target={'#modalEdit' + product.id}>
                                                        Editar
                                                    </button>
                                                )}
                                                {product.status_for_renting !== 'renting' && (
                                                    <Popconfirm
                                                        title="Está seguro que desea eliminar esta moto?"
                                                        onConfirm={() => confirm(product.id)}
                                                        onCancel={cancel}
                                                        okText="si"
                                                        cancelText="No"
                                                    >
                                                        <button className="btn btn-outline-danger">
                                                            Eliminar
                                                    </button>
                                                    </Popconfirm>

                                                )}
                                            </div>
                                        </div>
                                        <div className="modal fade" id={'modalImg' + product.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Cargar Imagenes</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="row">
                                                            <div className="col-sm-12 ml-2">
                                                                <div className="media p-3 mb-4 border">
                                                                    {product.image_path_1 ?
                                                                        (<img src={IMAGES_URL + 'products/' + product.image_path_1} className="img-fluid" width="90" alt="" />) :
                                                                        (<img src={imgDefault} className="img-fluid" width="90" alt="" />)}
                                                                    <div className="media-body mx-4 p-3 ">
                                                                        <h5 className="mt-0 mb-3"> Imagen Principal</h5>
                                                                        <Upload className="mt-2" action={'http://127.0.0.1:8000/api/products/img_1/' + product.id} {...props}>
                                                                            <Button className="mx-auto">
                                                                                <UploadOutlined /> Click to Upload
                                                                        </Button>
                                                                        </Upload>
                                                                    </div>
                                                                </div>
                                                                <div className="media p-3 mb-4 border">
                                                                    {product.image_path_1 ?
                                                                        (<img src={IMAGES_URL + 'products/' + product.image_path_2} className="img-fluid" width="90" alt="" />) :
                                                                        (<img src={imgDefault} className="img-fluid" width="90" alt="" />)}
                                                                    <div className="media-body ml-3 pl-3">
                                                                        <h5 className="mt-0 mb-3"> Imagen 2</h5>
                                                                        <Upload className="mt-2" action={'http://127.0.0.1:8000/api/products/img_2/' + product.id} {...props}>
                                                                            <Button className="mx-auto">
                                                                                <UploadOutlined /> Click to Upload
                                                                        </Button>
                                                                        </Upload>
                                                                    </div>
                                                                </div>
                                                                <div className="media p-3 mb-4 border">
                                                                    {product.image_path_1 ?
                                                                        (<img src={IMAGES_URL + 'products/' + product.image_path_3} className="img-fluid" width="90" alt="" />) :
                                                                        (<img src={imgDefault} className="img-fluid" width="90" alt="" />)}
                                                                    <div className="media-body ml-3 pl-3">
                                                                        <h5 className="mt-0 mb-3"> Imagen 3</h5>
                                                                        <Upload className="mt-2" action={'http://127.0.0.1:8000/api/products/img_3/' + product.id} {...props}>
                                                                            <Button className="mx-auto">
                                                                                <UploadOutlined /> Click to Upload
                                                                        </Button>
                                                                        </Upload>
                                                                    </div>
                                                                </div>
                                                                <div className="media p-3 mb-4 border">
                                                                    {product.image_path_1 ?
                                                                        (<img src={IMAGES_URL + 'products/' + product.image_path_4} className="img-fluid" width="90" alt="" />) :
                                                                        (<img src={imgDefault} className="img-fluid" width="90" alt="" />)}
                                                                    <div className="media-body ml-3 pl-3">
                                                                        <h5 className="mt-0 mb-3"> Imagen 4</h5>
                                                                        <Upload className="mt-2" action={'http://127.0.0.1:8000/api/products/img_4/' + product.id} {...props}>
                                                                            <Button className="mx-auto">
                                                                                <UploadOutlined /> Click to Upload
                                                                        </Button>
                                                                        </Upload>
                                                                    </div>
                                                                </div>
                                                                <div className="media p-3 mb-4 border">
                                                                    {product.image_path_1 ?
                                                                        (<img src={IMAGES_URL + 'products/' + product.permit_circulation_image_path} className="img-fluid" width="90" alt="" />) :
                                                                        (<img src={imgDefault} className="img-fluid" width="90" alt="" />)}
                                                                    <div className="media-body ml-3 pl-3">
                                                                        <h5 className="mt-0 mb-3">Permiso de Circulación</h5>
                                                                        <Upload className="mt-2" action={'http://127.0.0.1:8000/api/products/img_pc/' + product.id} {...props}>
                                                                            <Button className="mx-auto">
                                                                                <UploadOutlined /> Click to Upload
                                                                        </Button>
                                                                        </Upload>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-outline-info" data-dismiss="modal">Close</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal fade" id={'modalEdit' + product.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Editar Moto</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="row">
                                                            <div className="container col-sm-12">
                                                                <UpdateBike product={product} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
