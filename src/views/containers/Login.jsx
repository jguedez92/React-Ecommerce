import React from 'react'
import { Form, Input, Button, notification } from 'antd';
import { login } from '../../redux/actions/users.js'

const Login = (props) => {

    const onFinish = values => {
        const credentials = values;
        login(credentials)
            .then(res => {
                notification.success({ message: 'Login', description: 'Bienvenido' })
                props.history.push('/');
            })
            .catch(error => {
                notification.error({ message: 'Login', description: error.response.data.message })
            })
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="container mb-5">
            <div className="row d-flex justify-content-center">
                <div className="card shadow my-5 animated bounceInLeft">
                    <div className="card-title text-center mt-3 mb-0">
                        <h1> Login </h1>
                    </div>
                    <div className="card-body">
                        <Form
                             name="basic" initialValues={{ remember: true }}
                            onFinish={onFinish} onFinishFailed={onFinishFailed}>
                            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Ingresa tu email' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'ingresa tu contraseña' }]}>
                                <Input.Password />
                            </Form.Item>
                            <div className="text-center">
                                <Form.Item >
                                    <Button type="primary" htmlType="submit"> Ingresar </Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login