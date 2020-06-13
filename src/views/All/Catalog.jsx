import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'

import { Form, Input, Button, notification } from 'antd';

import { getAllProducts } from '../../redux/actions/products'
import imgDefault from '../../public/images/imgDefault.png'
import ProductDetails from './ProductDetails'

const Catalog = ({ products }) => {

    const [productFilter, setproductFilter] = useState(products);
    const [productInfo, setproductInfo] = useState({});
    const [renderProductDetail, setRenderProductDetail] = useState(true)

    useEffect(() => {
        getAllProducts();
        console.log(products)
    }, [])

    const onFinish = values => {
        const location = values.city.toLowerCase()
        const productLocation = productFilter.filter(product => product.city == location)
        if (productLocation.length < 1) {
            notification.warning({ message: 'Error', description: 'no hay motocicletas disponible para esta localidad' })
        } else {
            setproductFilter(productLocation)
        }
    };

    function productDetails(product) {
        setproductInfo(product)
        setRenderProductDetail(true)
    }

    return (
        <Fragment>
            {renderProductDetail ? (
                <div>
                    <ProductDetails product={productInfo} />
                </div>) :
                (
                    <div>
                        <div className="d-flex mt-2 p-1 justify-content-center">
                            <Form className=" col-12 mt-2 d-flex justify-content-center " name="locationForm" onFinish={onFinish}>
                                <Form.Item className="mr-3" name="city" style={{ width: 300 }}>
                                    <Input placeholder="Introduzca la localidad... ej: Madrid" />
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                        Buscar
                        </Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div className="container mt-1">
                            <div className="row p-2">
                                <div className="col-sm-12 col-md-3">

                                </div>
                                <div className="col-sm-12 col-md-9">
                                    <div className="row">
                                        {productFilter?.map(product =>
                                            <div className=" col-sm-9 col-md-4 ">
                                                <div className="card mb-4 shadow-sm">
                                                    <img src={imgDefault} alt="..." class="img-thumbnail p-1 rounded" />
                                                    <div className="card-body">
                                                        <div className="d-inline-block">
                                                            Licencia &nbsp;
                                                <strong class="mb-2 text-success">
                                                                {product.required_license}
                                                            </strong>
                                                        </div>
                                                        <div className="card-title">
                                                            <h6 className=" pb-2 border-bottom">
                                                                {product.brand} - {product.model}
                                                            </h6>
                                                        </div>
                                                        <p className="card-text">
                                                            {product.city}
                                                        </p>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <button className="btn btn-sm btn-outline-secondary mr-2" 
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

const mapStateToProps = ({ product }) => ({ products: product.products });
export default connect(mapStateToProps)(Catalog);
