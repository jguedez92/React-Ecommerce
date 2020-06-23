import React, { useState }  from 'react'
import { Form, Input, Button, notification } from 'antd';
import { login } from '../../redux/actions/users.js'

const Login = (props) => {

    const [loading,setLoading] = useState(false)
    

    const onFinish = values => {
        setLoading(true);
        const credentials = values;
        login(credentials)
            .then(res => {
                setLoading(false);
                notification.success({ message: 'Login', description: 'Bienvenido' })
                props.history.push('/');
            })
            .catch(error => {
                setLoading(false);
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
                        <h2 className="lead-title"> Login </h2>
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
                                    <Button type="primary" htmlType="submit" loading={loading}> 
                                    {loading? ('Cargando...') : ('Ingresar')} 
                                    </Button>
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