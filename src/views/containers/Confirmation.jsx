import React from 'react'
import './views.scss'
import { notification } from 'antd';



const Confirmation = (props) => {

    notification.success({ message: 'Activado!', description: 'dirigase a la seccion de ingreso para entrar al sistema' })
    setTimeout(() => {
        props.history.push('/ingreso')
    }, 3500);

    return (
        <div className="row d-flex justify-content-center">
            <div class="jumbotron mt-5 animated bounceInLeft">
                <div className="card">
                    <div className="card-body font-weight-bolder text-center">
                        <h1 class="display-4 font-weight-bold">Cuenta Activada!</h1>
                        <p class="lead font-weight-bold">
                            Ahora puedes ingresar a traves de la seccion de ingreso para rentar tu motocicleta.
                        </p>
                        <hr class="my-4" />
                        <p className="mx-auto">
                            Serás redireccionado en unos segundos...
                            <div class="spinner-border text-success" role="status">
                                <span class="sr-only">
                                    Loading...
                                </span>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmation
