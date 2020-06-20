import React, { useEffect, useState } from 'react'
import { IMAGES_URL } from '../../api-config'
import { Button, notification, Select } from 'antd'
import { updateProduct, getAllProducts } from '../../redux/actions/products.js'
const AdminBike = (props) => {
    const product = props.product
    const returnList = props.returnList
    const [statusValue, setStatusValue] = useState()
    const [loadingStatus, setLoadingStatus] = useState(false)
    const { Option } = Select;

    useEffect(() => {
        if (statusValue !== undefined) {
            const data = {
                status_for_renting: statusValue
            }
            console.log(data)
            
            setLoadingStatus(true)
            updateProduct(data, product.id)
                .then(res => {
                    getAllProducts()
                    setLoadingStatus(false)
                    notification.success({ message: 'Actualizado', description: 'se ha cambiado el estatus de manera satisfactoria' })
                })
                .catch(error => {
                    setLoadingStatus(false)
                    notification.success({ message: 'Error', description: 'Ha ocurrido un error, intentelo más tarde' })
                })
        }
    }, [statusValue])


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
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {product.image_path_1 ?
                                (<img src={IMAGES_URL + 'products/' + product.image_path_1} className="d-block img-thumbnail w-100" alt="..." />)
                                : (<img src={'https://www.motor.mapfre.es/wp-content/uploads/2018/05/default-img-1-352x224.gif'} className="d-block img-fluid w-100" alt="..." />)}
                        </div>
                        <div className="carousel-item">
                            {product.image_path_2 ?
                                (<img src={IMAGES_URL + 'products/' + product.image_path_2} className="d-block img-thumbnail w-100" alt="..." />)
                                : (<img src={'https://www.motor.mapfre.es/wp-content/uploads/2018/05/default-img-1-352x224.gif'} className="d-block img-fluid w-100" alt="..." />)}
                        </div>
                        <div className="carousel-item">
                            {product.image_path_3 ?
                                (<img src={IMAGES_URL + 'products/' + product.image_path_3} className="d-block img-thumbnail w-100" alt="..." />)
                                : (<img src={'https://www.motor.mapfre.es/wp-content/uploads/2018/05/default-img-1-352x224.gif'} className="d-block img-fluid w-100" alt="..." />)}
                        </div>
                        <div className="carousel-item">
                            {product.image_path_4 ?
                                (<img src={IMAGES_URL + 'products/' + product.image_path_4} className="d-block img-thumbnail w-100" alt="..." />)
                                : (<img src={'https://www.motor.mapfre.es/wp-content/uploads/2018/05/default-img-1-352x224.gif'} className="d-block img-fluid w-100" alt="..." />)}
                        </div>
                        <div className="carousel-item">
                            {product.image_path_4 ?
                                (<img src={IMAGES_URL + 'products/' + product.permit_circulation_image_path} className="d-block img-thumbnail w-100" alt="..." />)
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
                            <li className="list-group-item d-flex justify-content-around">
                                <div>
                                    <strong >Marca: </strong>  {product.brand}
                                </div>
                                <div>
                                    <strong >Modelo: </strong>  {product.model}
                                </div>
                            </li>

                            <li className="list-group-item d-flex justify-content-around">
                                <div>
                                    <strong >Año: </strong>  {product.year}
                                </div>
                                <div>
                                    <strong >Categoria: </strong>  {product.category.name}
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-around">
                                <div>
                                    <strong >Locación: </strong>  {product.city[0].toUpperCase() + product.city.substring(1)}
                                </div>
                                <div>
                                    <strong >Licencia: </strong>  {product.required_license}
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-around">
                                <div>
                                    <strong >Titular: </strong>  {product.user.fullName}
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-around">
                                <div>
                                    <strong >Email: </strong>  {product.user.email}
                                </div>
                                
                            </li>
                            <li className="list-group-item d-flex justify-content-start">
                                <strong className="mr-3" >Estatus: </strong>
                                <Select labelInValue style={{ width: 160 }} defaultValue={{ key: product.status_for_renting }} onChange={setStatus} loading={loadingStatus}>
                                    <Option value="enabled">Habilitado</Option>
                                    <Option value="pending">Revision</Option>
                                    <Option value="renting">Renting</Option>
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

export default AdminBike
