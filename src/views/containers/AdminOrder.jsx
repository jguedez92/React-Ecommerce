import React from 'react'
import { Button } from 'antd'
const AdminOrder = (props) => {
    const order = props.order
    const returnList = props.returnList
    console.log(order)
    return (
        <div className="row d-flex justify-content-center align-items-center p-2 my-4">
            <div className="col-sm-12 col-md-12 p-5">
                <div className="card">
                    <div className="card-header">

                    </div>
                    <div className="card-body p-3">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-around">
                                <div>
                                    <strong >usuario: </strong>  {order.user.fullName}
                                </div>
                                <div>
                                    <strong >Email: </strong>  {order.user.email}
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-around">
                                <div>
                                    <strong >Moto: </strong>  {order.product.brand} - {order.product.model}
                                </div>
                                <div>
                                    <strong >id: </strong>  {order.product.id}
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-around">
                                <div>
                                    <strong >Fecha de Renta: </strong>  {order.renting_date_init}
                                </div>
                                <div>
                                    <strong >Fecha de Entrega: </strong>  {order.renting_date_finish}
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-around">
                                <div>
                                <strong className="mr-3" >Estatus: </strong> {order.status}
                                </div>
                                <div>
                                    <strong >Precio Total Renta: </strong>  {order.price_total_renting} €
                                </div>
                                
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

export default AdminOrder
