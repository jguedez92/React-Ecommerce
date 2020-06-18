import React from 'react'

import Banner1 from '../../public/images/Banner1.png'
import Banner2 from '../../public/images/Banner2.png'
import Banner3 from '../../public/images/Banner3.png'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-home" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src={Banner1} className="carousel-img img-lg d-none d-md-block w-100"  alt="..." />
                        <img src={Banner1} className="carousel-img d-sm-block d-md-none w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Viaja a donde quieras!</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner2} className="carousel-img img-lg d-none d-md-block w-100"  alt="..." />
                        <img src={Banner2} className="carousel-img d-sm-block d-md-none w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Amplio catalogo de multiples categorias</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} className="carousel-img img-lg d-none d-md-block w-100"  alt="..." />
                        <img src={Banner3} className="carousel-img d-sm-block d-md-none w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Excelentes opciones para Touring</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="row p-4">
                <div className="col-12 p-4">
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-3 text-center">
                            <div className="bg-light rounded-circle mx-auto p-2 d-flex" style={{ width: 130, height: 130 }}>
                                <svg class="bi bi-card-heading text-dark mx-auto my-auto" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                    <path fill-rule="evenodd" d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                                    <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
                                </svg>
                            </div>
                            <h2 className="mt-3">Seguro Todo Riesgo</h2>
                            <p>
                                Seguro a todo riesgo 24/7 cubierto por Allianz. Para que alquiles con toda tranquilidad.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center">
                            <div className="bg-light rounded-circle mx-auto p-2 d-flex" style={{ width: 130, height: 130 }}>
                                <svg class="bi bi-person-check text-dark mx-auto my-auto" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6.854.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </div>
                            <h2 className="mt-3">Totalmente Seguro</h2>
                            <p>
                                Nos aseguramos de que todo lo que se publique sea 100% verificado para que la informacion sea segura.
                            </p>

                        </div>
                        <div className="col-sm-12 col-md-4 text-center">
                            <div className="bg-light rounded-circle mx-auto p-2 d-flex" style={{ width: 130, height: 130 }}>
                                <svg class="bi bi-hand-thumbs-up text-dark mx-auto my-auto" width="5em" height="5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                </svg>
                            </div>
                            <h2 className="mt-3">FÁCIL Y RÁPIDO</h2>
                            <p>
                                Con unos poco pasos podrás alquilar o poner tu moto en alquiler fácilmente.
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Home
