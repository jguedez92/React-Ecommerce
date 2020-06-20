import React, { useState } from 'react'
import { connect } from 'react-redux'
import AdminOrder from './AdminOrder.jsx'
const AdminOrders = ({orders}) => {

    const [ admOrder, setAdmOrder] = useState(false);
    const [ordertData, setOrderData] = useState({})
    const allOrders = orders

    const orderView = (order) => {
        setOrderData(order)
        setAdmOrder(true)
    }
    const returnList = () => {
        setAdmOrder(false)
    }
    return (
        <div className="container">
            <div className="row d-felx justify-content-center">
                <div className="col-sm-8 col-md-10 p-1 mb-5">
                    {admOrder ? (
                        <AdminOrder order={ordertData} returnList={returnList} />
                    ) : (
                            <table class="table animated bounceInRight my-4">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Moto</th>
                                        <th scope="col">Fecha inicio</th>
                                        <th scope="col">Fecha de entrega</th>
                                        <th scope="col">Estatus</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {allOrders.map(order => (
                                        <tr>
                                            <th scope="row">{order.id}</th>
                                            <td><button className="btn btn-link" onClick={() => orderView(order)}>
                                                {order.product.brand} - {order.product.model}
                                            </button>
                                            </td>
                                            <td>{order.renting_date_init}</td>
                                            <td>{order.renting_date_finish}</td>
                                            <td>{order.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({ orders: state.orders.orders });
export default connect(mapStateToProps)( AdminOrders);

