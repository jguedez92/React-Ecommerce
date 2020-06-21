import React from 'react'
import { connect } from 'react-redux'
import { Button, notification } from 'antd';
import { useState } from 'react';
import { changeStatus, getAllOrders } from '../../redux/actions/orders.js'
import { getAllProducts } from '../../redux/actions/products.js'
import { refreshUser } from '../../redux/actions/users.js'


const MyRenting = ({ user, orders }) => {

    const [loading, setLoading] = useState(false)
    const ordersReceived = orders.length > 0 ? orders.filter(order => order.product.user_id === user.id).map(order => ({ ...order, finishDate: new Date(order.renting_date_finish) })) : []
    const ordersMade = user.order
    const now = new Date()

    const finishRenting = (orderId, productId) => {
        setLoading(true)
        const option = {
            order_id : orderId,
            product_id : productId
        }
    
        changeStatus(option)
            .then(res =>{
                getAllOrders()
                getAllProducts()
                refreshUser()
                setLoading(false)
                notification.success({ message: 'Actualizado', description: 'Se ha terminado la renta satisfactoriamente' })
            })
            .catch(error => {
                    setLoading(false)
                    notification.error({ message: 'Error', description: 'Ha ocurrido un problema al actualizar la orden' })
                })
    }

    const format = (date) => {
        return date.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1');
    }
    return (
        <div className="container py-2" style={{ height: 450 }}>
            {ordersMade.length > 0 ? (
                <div className="row">
                    <h2 className="mt-2">Rentas Realizadas</h2>
                    <table className="table mt-1">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Moto</th>
                                <th scope="col">Fecha de renta</th>
                                <th scope="col">Fecha de Entrega</th>
                                <th scope="col">Costo Total</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordersMade.map(order => (
                                <tr>
                                    <th scope="row">{order.product.brand} {order.product.model}</th>
                                    <td>{format(order.renting_date_init)}</td>
                                    <td>{format(order.renting_date_finish)}</td>
                                    <td>{order.price_total_renting}€</td>
                                    <td>
                                        {order.status === 'renting' && (<strong className="text-info">Renting</strong>)}
                                        {order.status === 'finish' && (<strong className="text-success">Finished</strong>)}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
            ) : (
                    <div className="container border-top">
                        <h2 className="mt-4 lead-title">Rentas Recibidas</h2>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="card my-3 card-empty shadow animated bounceInLeft">
                                <div className="card-body p-4">
                                    <span className="mr-2">
                                        <svg className="bi bi-clock" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" />
                                            <path fillRule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                    </span>
                                    No hay Rentas realizadas...
                            </div>
                            </div>
                        </div>
                    </div>
                )}
            {ordersReceived.length > 0 ? (
                <div className="row">
                    <h2 className="mt-2 lead-title">Rentas Recibidas</h2>
                    <table className="table mt-1">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Moto</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Fecha de renta</th>
                                <th scope="col">Fecha de Entrega</th>
                                <th scope="col">Costo Total</th>
                                <th scope="col">status</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordersReceived.map(order => (
                                <tr>
                                    <th scope="row">{order.product.brand} {order.product.model}</th>
                                    <td>{order.user.fullName}</td>
                                    <td>{format(order.renting_date_init)}</td>
                                    <td>{format(order.renting_date_finish)}</td>
                                    <td>{order.price_total_renting}€</td>
                                    <td>
                                        {order.status === 'renting' && (<strong className="text-info">Renting</strong>)}
                                        {order.status === 'finish' && (<strong className="text-success">Finished</strong>)}
                                    </td>
                                    {order.status === 'renting' && (
                                        <td> <Button loading={loading} disabled={now >= order.finishDate ? false : true} onClick={() => finishRenting(order.id, order.product.id)} >Terminar Renta</Button> </td>
                                    )}
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            ) : (
                    <div className="container border-top">
                        <h2 className="mt-4">Rentas Recibidas</h2>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="card my-3 card-empty shadow animated bounceInLeft">
                                <div className="card-body p-4">
                                    <span className="mr-2">
                                        <svg className="bi bi-clock" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" />
                                            <path fillRule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                    </span>
                                    No hay Rentas recibidas...
                            </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}
const mapStateToProps = (state) => ({ user: state.user.user, orders: state.orders.orders });
export default connect(mapStateToProps)(MyRenting);

