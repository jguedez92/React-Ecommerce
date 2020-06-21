import React from 'react'
import {  Form, Input, Select, notification, Button } from 'antd';
import { categoryIdOptions, motorOptions, yearOptions, licenceOptions } from '../elements/optionsFilter.jsx'
import { updateProduct } from '../../redux/actions/products'
import { refreshUser } from '../../redux/actions/users'

const UpdateBike = (props) => {
    const product = props.product
    const [form] = Form.useForm();
    const { TextArea } = Input;

    const onFinish = values => {
        const product = {
            brand: values.brand,
            model: values.model,
            motor: values.motor,
            year: values.year,
            city: values.city.toLowerCase(),
            license: values.required_license,
            price: values.price,
            description: values.description,
            category: values.category_id,
        }
        const id = values.id
        updateProduct(product,id)
        .then(res => {
            notification.success({ message: 'Actualizado', description: 'Se ha actualizado la moto de manera satisfactoria' })
            refreshUser()
        })
        .catch(error => {
            notification.error({ message: 'Register', description: 'Ha ocurrido un problema' })
        })
    }

    return (
        <div>
            <Form form={form} name="register" onFinish={onFinish} scrollToFirstError
                initialValues={{
                    id: product.id,
                    brand: product.brand,
                    model: product.model,
                    motor: product.motor,
                    year: product.year,
                    city: product.city,
                    license: product.required_license,
                    price: product.price,
                    description: product.description,
                    category: product.category_id,

                }} >
                <Form.Item name="id" >

                </Form.Item>
                <Form.Item name="brand" label="Marca" >
                    <Input defaultValue={product.brand} />
                </Form.Item>
                <Form.Item name="model" label="Modelo" >
                    <Input defaultValue={product.model} />
                </Form.Item>
                <Form.Item name="motor" label="Cilindrada" >
                    <Select defaultValue={product.motor} options={motorOptions} />
                </Form.Item>
                <Form.Item name="year" label="Año">
                    <Select defaultValue={product.year} options={yearOptions} />
                </Form.Item>
                <Form.Item name="city" label="Localidad" >
                    <Input defaultValue={product.city} />
                </Form.Item>
                <Form.Item name="license" label="Licencia">
                    <Select defaultValue={product.required_license} options={licenceOptions} />
                </Form.Item>
                <Form.Item name="price" label="Precio" >
                    <Input defaultValue={product.price} prefix="EUR" suffix="€" />
                </Form.Item>
                <Form.Item name="description" label="Descripcion de la moto">
                    <TextArea defaultValue={product.description} autoSize={true} />
                </Form.Item>
                <Form.Item name="category" label="Categoria">
                    <Select defaultValue={product.category_id} placeholder={product.category.name} options={categoryIdOptions} />
                </Form.Item>
                <div className="container d-flex justify-content-center">
                    <Form.Item >
                        <Button htmlType="submit">
                            Enviar
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default UpdateBike
