import React, {useState} from 'react'
import { connect } from 'react-redux'
import AdminBike from './AdminBike.jsx'
const AdminBikes = ({products}) => {
    
    const [admProduct, setAdmProduct] = useState(false);
    const [productData, setProductData] = useState({})
    const allProducts = products

    const productView = (product) => {
        setProductData(product)
        setAdmProduct(true)
    }
    const returnList = () => {
        setAdmProduct(false)
    }
    return (
        <div className="container">
            <div className="row d-felx justify-content-center">
                <div className="col-sm-8 col-md-10 p-1 mb-5">
                    {admProduct ? (
                        <AdminBike product={productData} returnList={returnList} />
                    ) : (
                            <table class="table animated bounceInRight my-4">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Marca-Modelo</th>
                                        <th scope="col">Categoria</th>
                                        <th scope="col">Estatus</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {allProducts.map(product => (
                                        <tr>
                                            <th scope="row">{product.id}</th>
                                            <td><button className="btn btn-link" onClick={() => productView(product)}>
                                                {product.brand} - {product.model}
                                            </button>
                                            </td>
                                            <td>{product.category.name}</td>
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
const mapStateToProps = state => ({  products: state.products.products });
export default connect(mapStateToProps)(AdminBikes);

