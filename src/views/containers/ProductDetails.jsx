import React, { useEffect, useState } from 'react'
import { Cascader, Avatar, Rate, Button, Popconfirm, notification, Skeleton } from 'antd';
import { UserOutlined } from '@ant-design/icons'

import { IMAGES_URL } from '../../api-config';
import { insertOrder } from '../../redux/actions/orders.js'
import { refreshUser } from '../../redux/actions/users.js'
import { getAllProducts } from '../../redux/actions/products.js'
import imgDefault from '../../public/images/imgDefault.png'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { getProductById, kickProduct } from '../../redux/actions/products.js'

const ProductDetails = (props) => {

    useEffect(() => {
        getProductById(props.match.params.id)
            .then(res => {
                setProductDetails(res.data)
                setLoadingSkeleton(false)
            })
    }, [props.match.params.id])

    const user = props.user
    const history = useHistory()
    const [productDetails, setProductDetails] = useState()
    const [rentDays, setRendDays] = useState(1)
    const [loadingSkeleton, setLoadingSkeleton] = useState(true)
    const [loading, setLoading] = useState(false)
    const [costRent, setCostRent] = useState()
    const [costInsurance, setCostInsurance] = useState()
    const [costCommission, setCostCommission] = useState()

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

    const returnCatalog = () => {
        kickProduct()
        history.push('/catalogo')
    }
    const generateOrder = () => {
        setLoading(true)
        const order = {
            product_id: productDetails.id,
            renting_days: rentDays,
            price_total_renting: costRent + costInsurance + costCommission
        }
        insertOrder(order)
            .then(res => {
                setLoading(false)
                notification.success({ message: 'Rentado', description: 'Se ha realizado la renta satisfactoriamente' })
                getAllProducts();
                refreshUser();
                setTimeout(() => {
                    history.push('/mis_renting')
                }, 1500);
            })
            .catch(res => {
                setLoading(false)
                notification.error({ message: 'Register', description: 'Ha ocurrido un problema' })
            })
    }

    return (
        <div className="container">
            <Skeleton className="my-4" loading={loadingSkeleton} title={true} paragraph={{ rows: 12 }} active >
                <div className="row animated bounceInUp">
                    <div className="col-sm-12 col-md-9 order-md-1 ">
                        <div className="container border-right text-right mt-2 p-3">
                            <div className="card galery-product m-3 p-2">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            {productDetails?.image_path_1 ?
                                                (<img src={IMAGES_URL + 'products/' + productDetails?.image_path_1} className="d-block img-thumbnail w-100" alt="..." />)
                                                : (<img src={imgDefault} className="d-block img-thumbnail w-100" alt="..." />)}
                                        </div>
                                        <div className="carousel-item">
                                            {productDetails?.image_path_2 ?
                                                (<img src={IMAGES_URL + 'products/' + productDetails?.image_path_2} className="d-block img-thumbnail w-100" alt="..." />)
                                                : (<img src={imgDefault} className="d-block img-thumbnail w-100" width="400" alt="..." />)}
                                        </div>
                                        <div className="carousel-item">
                                            {productDetails?.image_path_3 ?
                                                (<img src={IMAGES_URL + 'products/' + productDetails?.image_path_3} className="d-block img-thumbnail w-100" alt="..." />)
                                                : (<img src={imgDefault} className="d-block img-thumbnail w-100" alt="..." />)}
                                        </div>
                                        <div className="carousel-item">
                                            {productDetails?.image_path_4 ?
                                                (<img src={IMAGES_URL + 'products/' + productDetails?.image_path_4} className="d-block img-thumbnail w-100" alt="..." />)
                                                : (<img src={imgDefault} className="d-block img-thumbnail w-100" alt="..." />)}
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            <button type="button" className="btn btn-link" onClick={returnCatalog} > Volver al Listado</button>
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
                                            <h6> {productDetails?.user.fullName} </h6>
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
                                                        <strong>Marca: </strong> {productDetails?.brand}
                                                    </div>
                                                    <div className="col-6 d-flex my-2">
                                                        <strong>Modelo: </strong> {productDetails?.model}
                                                    </div>
                                                    <div className="col-4 d-flex my-2">
                                                        <strong>Categoria: </strong> {productDetails?.category.name}
                                                    </div>
                                                    <div className="col-4 d-flex my-2">
                                                        <strong>Año: </strong> {productDetails?.year}
                                                    </div>
                                                    <div className="col-4 d-flex my-2">
                                                        <strong>Motor: </strong> {productDetails?.motor} CC.
                                                </div>
                                                    <div className="col-6 d-flex my-2 justify-content-center ">
                                                        <strong>Licencia: </strong> {productDetails?.required_license}
                                                    </div>
                                                    <div className="col-6 d-flex my-2 justify-content-center ">
                                                        <strong>Ciudad: </strong> {productDetails?.city}
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
                                            {productDetails?.description}
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
                                            <div className="input-group mb-3">
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
                                            <small>{productDetails?.price * rentDays} €</small>
                                        </div>
                                        <div className="col-6">
                                            <strong>Seguro:</strong>
                                        </div>
                                        <div className="col-6 text-right">
                                            <small>{productDetails?.price * 0.20}  €</small>
                                        </div>
                                        <div className="col-6">
                                            <strong>Comision:</strong>
                                        </div>
                                        <div className="col-6 text-right">
                                            <small>{productDetails?.price * 0.30} €</small>
                                        </div>
                                        <div className="col-6 mt-2">
                                            <strong>total:</strong>
                                        </div>
                                        <div className="col-6 mt-2 text-right">
                                            <h4>{} €</h4>
                                        </div>
                                        {user && (
                                            <div>
                                                {user.id !== productDetails?.user_id && (
                                                    <Popconfirm title="Está apunto de rentar esta moto, está seguro de continuar?"
                                                        onConfirm={generateOrder} okText="Si" cancelText="No" >
                                                        <Button className="btn btn-outline-info" loading={loading}> Rentar </Button>
                                                    </Popconfirm>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="border-top col-12 mt-2 p-4">
                                    <div className="row p-2">
                                        <div className="col-12 text-center mb-2">
                                            <img src="https://www.momoven.es/images/alianz.png" alt="" />
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
            </Skeleton>
        </div>
    )
}
const mapStateToProps = ({ products, user }) => ({ product: products.product, user: user.user });
export default connect(mapStateToProps)(ProductDetails);
