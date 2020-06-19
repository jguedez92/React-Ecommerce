import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Select, notification } from 'antd';
import { categoryIdOptions, motorOptions, yearOptions, licenceOptions } from '../elements/optionsFilter.jsx'
import {insertProduct} from '../../redux/actions/products'
import { refreshUser } from '../../redux/actions/users'

const NewBike = (props) => {

    const [form] = Form.useForm();
    const { TextArea } = Input;
    const onFinish = values => {
    const product = {
            brand: values.brand,
            model: values.model,
            motor: values.motor,
            year: values.year,
            city: values.city.toLowerCase(),
            required_license: values.license,
            status_for_renting: 'pending',
            price: Number(values.price),
            description: values.description,
            category_id: values.category,
            user_id: props.user.id
        }
  
        
        insertProduct(product)
        .then(res =>{
            refreshUser()
            notification.success({ message: 'Registrado', description: 'Se ha registrado la moto de manera Exitosa'})
            props.history.push('/mis_motos')
        })
        .catch(error => {
            notification.error({ message: 'Register', description: 'Ha ocurrido un error' })
        })
    }

    return (
        <div className="container mb-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="card shadow mt-5 animated bounceInRight">
                    <div className="card-title text-center mt-4 mb-0">
                        <h1> Agregar Moto </h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="container col-sm-12">
                                <Form form={form} name="register" onFinish={onFinish} scrollToFirstError >
                                    <Form.Item name="brand" label="Marca" rules={[
                                        {
                                            required: true,
                                            message: 'Ingrese la Marca de la moto',
                                        },
                                    ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item name="model" label="Modelo" rules={[
                                        {
                                            required: true,
                                            message: 'Ingrese la Modelo de la moto',
                                        },
                                    ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item name="motor" label="Cilindrada" rules={[
                                        {
                                            required: true,
                                            message: 'Ingrese la Cilindrada de la moto',
                                        },
                                    ]}>
                                        <Select placeholder="Seleccionar..." options={motorOptions}/>     
                                    </Form.Item>
                                    <Form.Item name="year" label="Año" rules={[
                                        {
                                            required: true,
                                            message: 'Ingrese el año de la moto',
                                        },
                                    ]}>
                                        <Select placeholder="Seleccionar..." options={yearOptions}/>     
                                    </Form.Item>
                                    <Form.Item name="city" label="Localidad" rules={[
                                        {
                                            required: true,
                                            message: 'Ingrese la localidad donde se encuentra la moto',
                                        },
                                    ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item name="license" label="Licencia" rules={[
                                        {
                                            required: true,
                                            message: 'Ingrese la Licencia requerida para la moto',
                                        },
                                    ]}>
                                        <Select placeholder="Seleccionar..." options={licenceOptions}/>     
                                    </Form.Item>
                                    <Form.Item name="price" label="Precio" rules={[
                                        {
                                            required: true,
                                            message: 'Ingrese el precio de renta diaria de la moto',
                                        },
                                    ]}>
                                        <Input type="number" prefix="EUR" suffix="€" />   
                                    </Form.Item>  
                                    <Form.Item name="description" label="Descripcion de la moto" rules={[
                                        {
                                            required: true,
                                            message: 'Ingrese la descripcion de la moto',
                                        },
                                    ]}>
                                        <TextArea autoSize={true} />
                                    </Form.Item>  
                                    <Form.Item name="category" label="Categoria" rules={[
                                        {
                                            required: true,
                                            message: 'Ingrese la Categoria de la moto',
                                        },
                                    ]}>
                                        <Select placeholder="Seleccionar..." options={categoryIdOptions}/>     
                                    </Form.Item>                                    
                                    <div className="container d-flex justify-content-center">
                                        <Form.Item >
                                            <button className="btn btn-outline-info" type="submit">
                                                Registrar Moto
                                            </button>
                                        </Form.Item>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ user }) => ({ user: user.user });
export default connect(mapStateToProps)(NewBike);