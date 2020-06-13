import React from 'react'
import { Form, Input, Button, notification } from 'antd';

import { register } from '../../redux/actions/users.js'


const Register = props => {
    const [form] = Form.useForm();

    const onFinish = values => {
        const user ={
            fullName: values.fullName,
            email: values.email,
            password: values.password,
        }
        register(user)
        .then( res =>{
            notification.success({message:'Register', description:'Se ha enviado un correo de confirmacion a su bandeja de entrada'})
            setTimeout(() => {
                props.history.push('/')
            }, 1500);
        })
        .catch( res =>{
            notification.error({message:'Register', description: res.response.data})
        })  
    };
  
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="card mt-5 animated bounceInRight" style={{width: 600}}>
                        <div className="card-title text-center mt-4 mb-0">
                            <h1> Registro </h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="container col-sm-12">
                                    <Form form={form} name="register" onFinish={onFinish} scrollToFirstError style={{padding: 20}}>
                                        <Form.Item name="fullName" label="Nombre y Apellido" rules={[
                                            {
                                            required: true,
                                            message: 'Ingrese su nombre completo',
                                            },
                                        ]}
                                        >
                                        <Input />
                                        </Form.Item>
                                        <Form.Item name="email" label="Email" rules={[
                                            {
                                            required: true,
                                            message: 'Ingrese su email',
                                            },
                                        ]}
                                        >
                                        <Input />
                                        </Form.Item>
                                        <Form.Item name="password" label="Contraseña" rules={[
                                            {
                                            required: true,
                                            message: 'Ingrese su contraseña',
                                            },
                                        ]} hasFeedback >
                                        <Input.Password />
                                        </Form.Item>
                
                                        <Form.Item name="confirm" label="Confirme contraseña" dependencies={['password']} hasFeedback
                                        rules={[
                                            {
                                            required: true,
                                            message: 'Ingrese la confirmación de la contraseña',
                                            },
                                            ({ getFieldValue }) => ({
                                            validator(rule, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                                }
                                                return Promise.reject('Las contraseñas no coinciden');
                                            },
                                            }),
                                        ]}>
                                        <Input.Password />
                                        </Form.Item>                
                                        <div className="container d-flex justify-content-center">
                                            <Form.Item >
                                                <Button type="primary" htmlType="submit">
                                                    Register
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
        </div>
    );
  };
                
      

export default Register;