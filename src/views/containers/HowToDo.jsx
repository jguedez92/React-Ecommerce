import React from 'react'

const HowToDo = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-faq jumbotron-fluid d-none d-md-block border-bottom">
                <div className="card col-6 my-5 mx-auto">
                    <h1 className="display-4 font-weight-bold text-center">Nosotros</h1>
                </div>
            </div>

            <div className="container">
                <div className="row d-flex justify-content-center p-4">
                    <div className="col-sm-12 col-md-6 text-center">
                        <h2 className="border-bottom border-info pb-2 lead-title">Conductores</h2>
                        <div className="card shadow my-4 py-2">
                            <div className="card-body">
                                <h4>1-<span className="text-muted ml-2">Registrate en nuestra web</span></h4>
                                Crea tu cuenta y sube tus documentos para que tu cuenta sea habilitada para rentar.
                            </div>
                        </div>
                        <div className="card shadow my-4 py-2">
                            <div className="card-body">
                                <h4>2-<span className="text-muted ml-2">Busca la Moto que te gusta</span></h4>
                                Busca en nuestro catalogo, puedes filtrar (localidad, tipo de moto, marca...) para encontrar tu moto ideal.
                            </div>
                        </div>
                        <div className="card shadow my-4 py-2">
                            <div className="card-body">
                                <h4>3-<span className="text-muted ml-2">Concreta la Renta</span></h4>
                                Selecciona la moto que mejor te encaje, introduce tus datos y queda con el propietario.
                                Comprueba el estado de la moto, anota los posibles desperfectos que pueda tener y Coge las llaves.
                            </div>
                        </div>
                        <div className="card shadow my-4 py-2">
                            <div className="card-body">
                                <h4>4-<span className="text-muted ml-2">Entrega de Llaves</span></h4>
                                Queda con el propietario. Comprueba el estado de la moto y anota los
                                posibles desperfectos que pueda tener. Firma el contrato de alquiler. Coge las llaves..
                            </div>
                        </div>
                        <div className="card shadow my-4 py-2">
                            <div className="card-body">
                                <h4>5-<span className="text-muted ml-2">Disfruta</span></h4>
                                Gracias al seguro todo riesgo de Allianz podrás disfrutar de la moto con total tranquilidad.
                            </div>
                        </div>
                        <div className="card shadow my-4 py-2">
                            <div className="card-body">
                                <h4>6-<span className="text-muted ml-2">Devolución de llaves</span></h4>
                                Entrega las llaves al propietario y revisa con él el estado de la moto.
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 text-center">
                        <h2 className="border-bottom border-info pb-2 lead-title">Propietarios</h2>
                        <div className="card shadow my-4 py-2">
                            <div className="card-body">
                                <h4>1-<span className="text-muted ml-2">Registrate en nuestra web</span></h4>
                                Crea tu cuenta y sube tus documentos para que tu cuenta sea habilitada para publicar tu moto.
                            </div>
                        </div>
                        <div className="card shadow my-4 py-2">
                            <div className="card-body">
                                <h4>2-<span className="text-muted ml-2">Sube tu moto</span></h4>
                                Inscribe y publica tu moto gratuitamente (indica las características de tu moto y la disponibilidad de alquiler).
                            </div>
                        </div>
                        <div className="card shadow my-4 py-2">
                            <div className="card-body">
                                <h4>3-<span className="text-muted ml-2">Notificación de Renting</span></h4>
                                Nosotros te notificamos cuando algun usuario haya realizado la renta de tu moto.
                            </div>
                        </div>
                        <div className="card shadow my-4 py-2">
                            <div className="card-body">
                                <h4>4-<span className="text-muted ml-2">Entrega de llaves</span></h4>
                                Verifica la identidad del conductor, el carnet de conducir y entrégale las llaves.
                            </div>
                        </div>
                        <div className="card shadow my-4 py-2">
                            <div className="card-body">
                                <h4>5-<span className="text-muted ml-2">Recogida de llaves</span></h4>
                                Queda con el conductor, revisa el estado de tu moto y comprueba que todo está en orden.
                            </div>
                        </div>
                        <div className="card shadow my-4 py-2">
                            <div className="card-body">
                                <h4>6-<span className="text-muted ml-2">Recibe tu dinero</span></h4>
                                Recibirás el pago en tu cuenta bancaria en un plazo máximo de 5 días una vez finalizado el alquiler.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToDo
