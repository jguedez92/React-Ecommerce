import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Cascader, notification } from 'antd';
import imgDefault from '../../public/images/imgDefault.png'
import ProductDetails from './ProductDetails'
import { IMAGES_URL } from '../../api-config';

import { categoryOptions, motorOptions, brandOptions, yearOptions, licenceOptions } from '../elements/optionsFilter.jsx'

const Catalog = (props) => {

    const products = props.products.filter(product => product.status_for_renting === 'enabled')
    const user = props.user
    const [productFilter, setProductFilter] = useState(products);
    const [productInfo, setProductInfo] = useState({});
    const [renderProductDetail, setRenderProductDetail] = useState(false)
    const productDetails = (product) => {
        setProductInfo(product)
        setRenderProductDetail(true)
    }
    const closeProductDetails = () => {
        setRenderProductDetail(false)
    }

    const locationFilter = (value) => {
        console.log(value)
        const location = value.city.toLowerCase()
        const productLocation = productFilter.filter(product => product.city === location)
        if (productLocation.length < 1) {
            notification.warning({ message: 'Error', description: 'no hay motocicletas disponibles para la localidad de ' + location })
        } else {
            setProductFilter(productLocation)
        }
    };
    const categoryFilter = (value) => {
        if (value[0] !== undefined) {
            const productCategory = productFilter.filter(product => product.category.name === value[0])
            if (productCategory.length < 1) {
                notification.warning({ message: 'Error', description: 'no hay motocicletas disponible para esta categoria' })
            } else {
                setProductFilter(productCategory)
            }
        } else {
            setProductFilter(products)
        }
    }
    const motorFilter = (value) => {
        if (value[0] !== undefined) {
            const productMotor = productFilter.filter(product => product.motor === value[0])
            if (productMotor.length < 1) {
                notification.warning({ message: 'Error', description: 'no hay motocicletas disponible para esta cilindrada' })
            } else {
                setProductFilter(productMotor)
            }
        } else {
            setProductFilter(products)
        }
    }
    const licenceFilter = (value) => {
        if (value[0] !== undefined) {
            const productLicence = productFilter.filter(product => product.required_license === value[0])
            if (productLicence.length < 1) {
                notification.warning({ message: 'Error', description: 'no hay motocicletas disponible para este nivel de Licencia' })
            } else {
                setProductFilter(productLicence)
            }
        } else {
            setProductFilter(products)
        }
    }
    const brandFilter = (value) => {
        if (value[0] !== undefined) {
            const productBrand = productFilter.filter(product => product.brand === value[0])
            if (productBrand.length < 1) {
                notification.warning({ message: 'Error', description: 'no hay motocicletas disponible con la Marca ' + value[0] })
            } else {
                setProductFilter(productBrand)
            }
        } else {
            setProductFilter(products)
        }
    }
    const deleteFilters = () => {
        setProductFilter(products)
    }
    return (
        <Fragment>
            {renderProductDetail ? (
                <div>
                    <ProductDetails product={productInfo} user={user} closeDetails={closeProductDetails} />
                </div>) :
                (
                    <div>
                        <div className="d-flex mt-2 p-1 justify-content-center">
                            <Form className=" col-12 mt-2 d-flex justify-content-center " name="locationForm" onFinish={locationFilter}>
                                <Form.Item className="mr-3" name="city" style={{ width: 300 }}>
                                    <Input placeholder="Introduzca la localidad... ej: Madrid" />
                                </Form.Item>
                                <Form.Item >
                                    <button className="btn btn-sm btn-outline-info" type="submit">
                                        Buscar
                                    </button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div className="container mt-3">
                            <div className="row p-2">
                                <div className="col-sm-12 mb-2 col-md-3">
                                    <div className="row p-2">
                                        <div className="container rounded shadow-sm bg-light">
                                            <h4 className="mt-3 text-center">
                                                Filtros de Búsqueda
                                            </h4>
                                            <div className="border-top col-12 mt-2 mb-4">
                                                <div className="row my-3">
                                                    <div className="col-12 d-flex justify-content-between flex-md-column">
                                                        <strong className="my-auto">Categoria:</strong>
                                                        <Cascader placeholder="Seleccionar..." className="mt-2" options={categoryOptions} onChange={categoryFilter} />
                                                    </div>
                                                </div>
                                                <div className="row my-3 ">
                                                    <div className="col-12 d-flex justify-content-between flex-md-column">
                                                        <strong className="my-auto" >Año:</strong>
                                                        <Cascader placeholder="Seleccionar..." className="mt-2" options={yearOptions} onChange={motorFilter} />
                                                    </div>
                                                </div>
                                                <div className="row my-3 ">
                                                    <div className="col-12 d-flex justify-content-between flex-md-column">
                                                        <strong className="my-auto" >Licencia:</strong>
                                                        <Cascader placeholder="Seleccionar..." className="mt-2" options={licenceOptions} onChange={licenceFilter} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-top col-12 mt-2 mb-4">
                                                <div className="row my-3">
                                                    <div className="col-12 d-flex justify-content-between flex-md-column">
                                                        <strong className="my-auto" >Cilindrada:</strong>
                                                        <Cascader placeholder="Seleccionar..." className="mt-2" options={motorOptions} onChange={motorFilter} />
                                                    </div>
                                                </div>
                                                <div className="row my-3 ">
                                                    <div className="col-12 d-flex justify-content-between flex-md-column">
                                                        <strong className="my-auto" >Marca:</strong>
                                                        <Cascader placeholder="Seleccionar..." className="mt-2" options={brandOptions} onChange={brandFilter} />
                                                    </div>
                                                </div>
                                                <div className="row my-1 ">
                                                    <div className="col-12 d-flex justify-content-center">
                                                        <button className="btn btn-sm btn-outline-info mx-auto" onClick={deleteFilters}>
                                                            Eliminar Filtros
                                                            </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-9 animated bounceInRight">
                                    <div className="row">
                                        {productFilter?.map(product =>
                                            <div className=" col-sm-9 col-md-4 ">
                                                <div className="card mb-4 shadow-sm">
                                                    {product.image_path_1 ?
                                                        (<img src={IMAGES_URL + 'products/' + product.image_path_1} className="img-thumbnail p-1 rounded" alt="..." />)
                                                        : (<img src={imgDefault} alt="..." className="img-thumbnail p-1 rounded" />)}
                                                    <div className="card-body">
                                                        <div className="d-inline-block">
                                                            Licencia &nbsp;
                                                <strong className="mb-2 text-success">
                                                                {product.required_license}
                                                            </strong>
                                                        </div>
                                                        <div className="card-title">
                                                            <h6 className=" pb-2 border-bottom">
                                                                {product.brand} - {product.model}
                                                            </h6>
                                                        </div>
                                                        <p className="card-text text-center font-weight-bolder">
                                                            {product.category.name}
                                                        </p>
                                                        <p className="card-text text-center">
                                                            <svg className="bi bi-geo-alt" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                            </svg>
                                                            {product.city[0].toUpperCase() + product.city.substring(1)}
                                                        </p>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <button className="btn btn-sm btn-outline-info mr-2"
                                                                onClick={() => productDetails(product)}>
                                                                Detalles
                                                            </button>
                                                            <small className="text-muted text-center">
                                                                <span className="font-weight-bolder d-inline-block">
                                                                    Precio por dia &nbsp;
                                                                </span>
                                                                {product.price} €
                                                        </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </Fragment>
    )
}
const mapStateToProps = ({products, user}) => ({ products: products.products, user: user.user });
export default connect(mapStateToProps)(Catalog);
