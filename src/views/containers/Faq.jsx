import React from 'react'

const Faq = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-faq jumbotron-fluid d-none d-md-block border-bottom">
                <div className="card col-6 my-5 mx-auto">
                    <h1 className="display-4 font-weight-bold text-center">Nosotros</h1>
                </div>
            </div>

            <div className="container">
            <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-7 p-5">
                        <h2 className="featurette-heading">¿Qué es GoRide?</h2>
                        <p className="text-justify">
                            GoRide es una plataforma de consumo colaborativo que permite el alquiler de motos entre particulares. A través de GoRide, puedes alquilar y disfrutar de motos de usuarios de la plataforma que estén cerca de ti de manera fácil y segura.
                        </p>
                        <p className="text-justify">
                            Y es que a todos nos gustaría probar diferentes motos.
                            Pues lo único que falta es ponernos de acuerdo. ¿Cómo?
                            Dando a otros moteros la posibilidad de subir su moto a GoRide y crear el punto de encuentro donde compartir nuestra pasión, beneficiarnos mutuamente; sacando algo de dinero y probando las motos que siempre hemos deseado.
                            El propietario siempre determina el precio y decide cuándo y a quién alquila su moto.
                        </p>
                        <p className="text-justify">
                            Es una pena que habiendo gente interesada en utilizar tu moto ocasionalmente, ésta pase el 97% del tiempo parada. El sistema de valoración de los usuarios junto con la póliza de seguro de Allianz y nuestra gestión de cobros hará que no te tengas que preocupar por nada.
                        </p>
                    </div>
                    <div className="col-md-5 d-sm-none  d-md-block my-auto">
                        <img src="https://www.moto1pro.com/sites/default/files/scalarider_packtalk_2.jpg" className="img-thumbnail img-fluid" alt="" />
                    </div>
                </div>
                <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2 p-5">
                        <h2 className="featurette-heading">No estamos locos!. <span className="text-muted">hay más gente como nosotros....</span></h2>
                        <p className="text-justify">
                            En GoRide trabajamos un equipo joven que creemos que existe una alternativa a cómo disfrutamos del mundo de la moto; haciendo un uso más eficiente de los vehículos y con un consumo más inteligente.

                            Nos gusta disfrutar de la moto, pero no nos importa tanto la propiedad. Para nosotros prima la experiencia a la posesión. Somos usuarios habituales de otras plataformas de consumo colaborativo. Entendemos que es la manera de la que poder disfrutar de todo lo que nos gusta con unos costes asequibles.
                        </p>
                    </div>
                    <div className="col-md-5 d-sm-none  d-md-block order-md-1 my-auto">
                        <img src="https://wanderlustmemories.com/wp-content/uploads/2017/08/viajar-en-moto-kit.jpg" className="img-thumbnail img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
