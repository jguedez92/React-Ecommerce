import React, { useState } from 'react'
import './views.scss'
import { Form, Input, Button, notification, } from 'antd';
import { confirmation } from '../../redux/actions/users.js'

const Confirmation = (props) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)

    const onFinish = values => {
        setLoading(true)
        let code = values.code
        const userId = localStorage.getItem('userId')
        const data = {
            id:userId,
            confirmation_code: code
        }
        
        confirmation(data)
        .then(res => {
            setLoading(false)
            notification.success({ message: 'Confirmación', description: 'Su usuario se ha activado satisfactoriamente' })
            setTimeout(() => {
                props.history.push('/ingreso')
            }, 1500);
        })
        .catch(error => {
            setLoading(false)
            notification.error({ message: 'Error', description: error.response.data})
        })
        
    };


    return (
        <div className="container mb-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="card shadow mt-5 animated bounceInRight p-4">
                    <div className="card-title text-center mt-4 mb-0">
                        <h1>Confirmacion de Cuenta</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="container col-sm-12">
                                <Form form={form} name="confirmation" onFinish={onFinish} scrollToFirstError >
                                    <Form.Item name="code" label="Codigo de Confirmación" rules={[
                                        {
                                            required: true,
                                            message: 'Debe ingresar el codigo de validacion'
                                        },
                                    ]} >
                                        <Input/>
                                    </Form.Item>
                                    <div className="container d-flex justify-content-center mt-2">
                                        <Form.Item >
                                            <Button type="primary" htmlType="submit" loading={loading}>
                                                {loading ? ('Cargando...') : ('Enviar')}
                                            </Button>
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

export default Confirmation
