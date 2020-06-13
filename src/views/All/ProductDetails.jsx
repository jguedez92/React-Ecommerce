import React from 'react'

import imgDefault from '../../public/images/imgDefault.png'
import './views.scss'

const ProductDetails = (props) => {

    console.log(props?.product)

    return (
        <div className="container">
            <div className="row">
                <div className=" col-md-9 order-md-1 ">
                    <div className="container border-right p-4">
                        <div className="card galery-product m-3 p-2">
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={imgDefault} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={imgDefault} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={imgDefault} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={imgDefault} class="d-block w-100" alt="..." />
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
                    </div>
                </div>
                <div className="col-12 order-md-3 ">
                    <div className="row">
                        product details 
                    </div>
                </div>
                <div className="col-md-3 order-md-2 p-2">
                    <div className="row p-2">
                        <div className="container bg-light">
                            <h4 className="mt-3">
                                Informacion de Renta
                            </h4>
                            <div className="border-top col-12 mt-2">
                                <div className="row my-3 d-flex justify-content-between">
                                    <div className="col-6">
                                        <strong>Alquiler:</strong>
                                    </div>
                                    <div className="col-6 text-right">
                                        <small>00 €</small>
                                    </div>
                                    <div className="col-6">
                                        <strong>Seguro:</strong>
                                    </div>
                                    <div className="col-6 text-right">
                                        <small>00 €</small>
                                    </div>
                                    <div className="col-6">
                                        <strong>Comision:</strong>
                                    </div>
                                    <div className="col-6 text-right">
                                        <small>00 €</small>
                                    </div>
                                    <div className="col-6 mt-2">
                                        <strong>total:</strong>
                                    </div>
                                    <div className="col-6 mt-2 text-right">
                                        <h4>00 €</h4>
                                    </div>
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
