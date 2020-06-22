import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AdminBike from './AdminBike.jsx'
import {  Select, Input, notification, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const AdminBikes = ({ products }) => {

    const { Option } = Select;
    const [admUser, setAdmUser] = useState(false)
    const [loadingStatus, setLoadingStatus] = useState(false)
    const [productData, setProductData] = useState({})
    const [productList, setProductList] = useState(products)
    const { Search } = Input;

    const allProducts = productList
    console.log(allProducts)

    const userView = (productInfo) => {
        setProductData(productInfo)
        setAdmUser(true)
    }
    const returnList = () => {
        setAdmUser(false)
    }

    const setStatusFilter = (value) => {
        setLoadingStatus(true)
        const filter = value.value
        if (filter === null) {
            setProductList(products)
        }
        const productsFiltered = allProducts.filter(product => (product.status_for_renting === filter))
        if (productsFiltered.length > 0) {
            setLoadingStatus(false)
            setProductList(productsFiltered)
        } else {
            setLoadingStatus(false)
            notification.warning({ message: ' No hay resultados ', description: `No se encontraron usuarios con el estatus ${filter} ` })
        }
    }
    const setIdFilter = value => {
        setLoadingStatus(true)
        const filter = Number(value)
        const productsFiltered = allProducts.filter(product => (product.user_id === filter))
        if (productsFiltered.length > 0) {
            setLoadingStatus(false)
            setProductList(productsFiltered)
        } else {
            setLoadingStatus(false)
            notification.warning({ message: ' No hay resultados ', description: `No se encontraron usuarios con el estatus ${filter} ` })
        }
    }
    const deleteFilters = () => {
        setProductList(products)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 border rounded shadow bg-light my-2 p-3">
                    <div className="my-1">
                        <h3 className="lead-title">Filtros de Busqueda</h3>
                    </div>
                    <div className="row d-flex justify-content-around p-1">
                        <div className="col-sm-12 col-md-4 border py-4 text-center">
                            <strong className="mr-3">Estatus: </strong>
                            <Select labelInValue style={{ width: 160 }} defaultValue={{ key: 'Todos' }} onChange={setStatusFilter} loading={loadingStatus} style={{ width: 200 }}>
                                <Option value={null}>Todos</Option>
                                <Option value="enabled">Habilitado</Option>
                                <Option value="pending">Revision</Option>
                                <Option value="renting">Rentado</Option>
                                <Option value="disabled">Deshabilitado</Option>
                            </Select>
                        </div>
                        <div className="col-sm-12 col-md-4 border py-2 text-center">
                            <strong className="mr-3">id propietario: </strong>
                            <Search prefix={<UserOutlined />} placeholder="input search text"
                                onSearch={value => setIdFilter(value)}
                                style={{ width: 200 }}
                            />
                        </div>
                        <div className="col-sm-12 col-md-4 border py-4 text-center">
                            <Button onClick={deleteFilters}>
                                Reestablecer Filtros
                                    </Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-md-12 p-1 mb-5">
                    {admUser ? (
                        <AdminBike user={productData} returnList={returnList} />
                    ) : (
                            <table className="table animated bounceInRight my-4">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nombres</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Rol</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allProducts?.map(product => (
                                        <tr>
                                            <th scope="row">{product.id}</th>
                                            <td><button className="btn btn-link" onClick={() => userView(product)}>
                                                {product.brand} -{product.model}
                                            </button>
                                            </td>
                                            <td>{product.category.name}</td>
                                            <td>{product.city}</td>
                                            <td>{product.status_for_renting}</td>
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

const mapStateToProps =(state)=> ({ products: state.products.products });
export default connect(mapStateToProps)(AdminBikes);

