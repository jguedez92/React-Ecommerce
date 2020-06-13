import React from 'react'
import { Form, Input, Button, notification } from 'antd';
import { login } from '../../redux/actions/users.js'


const layout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };
const tailLayout = { wrapperCol: { offset: 10, span: 4 } };

const Login = ( props ) => {

    const onFinish = values => { 
        const credentials = values;
        login(credentials)
        .then(res => {
            notification.success({ message: 'Login', description: 'Bienvenido' })
            props.history.push('/'); 
        })
        .catch( error => {
            notification.error({ message: 'Login', description: error.response.data.message })
        })
    };
    
    const onFinishFailed = errorInfo => { 
        console.log('Failed:', errorInfo); 
    };

    return (
        <div className="row">
            <div className="container col-12">
                <div className="row d-flex justify-content-center">
                    <div className="card mt-5 animated bounceInLeft" style={{width: 400}}>
                        <div className="card-title text-center mt-3 mb-0">
                            <h1> Login </h1>
                        </div>
                        <div className="card-body">
                            <Form
                            {...layout} name="basic" initialValues={{ remember: true }}
                            onFinish={onFinish} onFinishFailed={onFinishFailed}>
                                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Ingresa tu email' }]}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'ingresa tu contraseña' }]}>
                                    <Input.Password/>
                                </Form.Item>
                                <div className="">
                                    <Form.Item {...tailLayout}>
                                        <Button type="primary" htmlType="submit"> Ingresar </Button>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Login