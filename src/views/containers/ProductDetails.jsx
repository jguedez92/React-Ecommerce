import React, { useState } from 'react'
import { Cascader, Avatar, Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons'

import { IMAGES_URL } from '../../api-config';
import imgDefault from '../../public/images/imgDefault.png'
import './views.scss'

const ProductDetails = (props) => {

    const closeDetails = props.closeDetails
    const user = props.user
    const product = props.product
    console.log(product, user)
    const [rentDays, setRendDays] = useState(1)

    let costRent = product.price * rentDays
    let costInsurance = product.price * 0.20
    let costCommission = product.price * 0.30
    let costTotal = (costRent + costInsurance + costCommission)

    const options = [
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
        {
            value: 6,
            label: '6',
        },
        {
            value: 7,
            label: '7',
        },
    ];

    function onChange(value) {
        setRendDays(value[0])
    }
    const generateOrder = () => {
        console.log('entrando')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-9 order-md-1 ">
                    <div className="container border-right text-right mt-2 p-3">
                        <div className="card galery-product m-3 p-2">
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
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
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <button type="button" class="btn btn-link" onClick={closeDetails} > Volver al Listado</button>
                    </div>
                </div>
                <div className="col-12 order-md-3 mt-4">
                    <div className="row d-flex">
                        <div className="col-sm-12 col-md-6 p-3">
                            <h4 className="border-bottom p-2">Propietario</h4>
                            <div className="container col-12 text-center p-2">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <Avatar className="mx-auto" size={70} icon={<UserOutlined />} />
                                        <h6> {product.user.fullName} </h6>
                                    </div>
                                    <div className=" col-6 text-center">
                                        <Rate className="my-2" disabled defaultValue={4} />
                                        <h6>Valoraciones</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 p-3">
                            <h4 className="border-bottom p-2">Ficha Técnica</h4>
                            <div className="container">
                                <div className="row p-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6 d-flex my-2">
                                                    <strong>Marca: </strong> {product.brand}
                                                </div>
                                                <div className="col-6 d-flex my-2">
                                                    <strong>Modelo: </strong> {product.model}
                                                </div>
                                                <div className="col-4 d-flex my-2">
                                                    <strong>Categoria: </strong> {product.category.name}
                                                </div>
                                                <div className="col-4 d-flex my-2">
                                                    <strong>Año: </strong> {product.year}
                                                </div>
                                                <div className="col-4 d-flex my-2">
                                                    <strong>Motor: </strong> {product.motor} CC.
                                                </div>
                                                <div className="col-6 d-flex my-2 justify-content-center ">
                                                    <strong>Licencia: </strong> {product.required_license}
                                                </div>
                                                <div className="col-6 d-flex my-2 justify-content-center ">
                                                    <strong>Ciudad: </strong> {product.city}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 p-3">
                            <h4 className="border-bottom p-2">Descripción</h4>
                            <div className="container col-12 text-justify p-2">
                                <div className="row">
                                    <p>
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 p-3">
                            <h4 className="border-bottom p-2">Condiciones</h4>
                            <div className="container col-12 text-justify p-2">
                                <div className="row">
                                    <ul>
                                        <li>Edad minima de 23 años.</li>
                                        <li>Antigüedad mínima de 2 años en el carnet que habilita a
                                            la conducción de la moto que vas a alquilar.</li>
                                        <li>Residir en la misma ciudad o provincia que el propieario.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3 order-md-2 p-2">
                    <div className="row p-2">
                        <div className="container rounded shadow-sm mt-5 bg-light">
                            <h4 className="mt-3 text-center">
                                Informacion de Renta
                            </h4>
                            <div className="border-top col-12 mt-2">
                                <div className="row my-3 d-flex justify-content-between">
                                    <div className="col-12">
                                        <strong>Cantdad de dias:</strong>
                                        <div class="input-group mb-3">
                                            <Cascader options={options} onChange={onChange} defaultValue={['1']} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-top col-12 mt-2">
                                <div className="row my-3 d-flex justify-content-between">
                                    <div className="col-6">
                                        <strong>Alquiler:</strong>
                                    </div>
                                    <div className="col-6 text-right">
                                        <small>{costRent} €</small>
                                    </div>
                                    <div className="col-6">
                                        <strong>Seguro:</strong>
                                    </div>
                                    <div className="col-6 text-right">
                                        <small>{costInsurance}  €</small>
                                    </div>
                                    <div className="col-6">
                                        <strong>Comision:</strong>
                                    </div>
                                    <div className="col-6 text-right">
                                        <small>{costCommission} €</small>
                                    </div>
                                    <div className="col-6 mt-2">
                                        <strong>total:</strong>
                                    </div>
                                    <div className="col-6 mt-2 text-right">
                                        <h4>{costTotal} €</h4>
                                    </div>
                                    {user && (
                                        <button className="btn btn-outline-info" onClick={generateOrder}> Rentar </button>
                                    )}
                                </div>
                            </div>
                            <div className="border-top col-12 mt-2 p-4">
                                <div clasName="row p-2">
                                    <div className="col-12 text-center mb-2">
                                        <img className="" src="https://www.momoven.es/images/alianz.png" alt="" />
                                    </div>

                                    <p className="text-center">
                                        Seguro a todo riesgo 24/7 cubierto por Allianz.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductDetails
