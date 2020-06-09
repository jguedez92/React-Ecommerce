import React from 'react'
import { Card, Form, Input, Row, Col, Button, Typography, notification } from 'antd';



const Register = props => {

    const { Title } = Typography;
    const [form] = Form.useForm();

    const onFinish = values => {
        const user ={
            username: values.username,
            password: values.password,
            role: 'standar'
        }
        
        console.log(user);
        
    };
  
    return (
        <Row justify="center" >
            <Col span={12} style={{marginTop: 60}}>
                <Card className=" cardRegister animated bounceInRight">
                    <Row justify="center" style={{ marginBottom: 5}}>
                        <Col>
                            <Title level={3}> Formulario de Registro </Title>
                        </Col>
                    </Row>
                    
                    <Form form={form} name="register" onFinish={onFinish} scrollToFirstError style={{padding: 20}} >
                        <Form.Item name="username" label="Usuario" rules={[
                            {
                            required: true,
                            message: 'Ingrese su nombre de usuario',
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
                        ]}
                        hasFeedback
                        >
                        <Input.Password />
                        </Form.Item>
                
                        <Form.Item
                        name="confirm"
                        label="Confirme contraseña"
                        dependencies={['password']}
                        hasFeedback
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
                        ]}
                        >
                        <Input.Password />
                        </Form.Item>                 
                        <Row justify="center">
                            <Col>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                        Register
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>            
                    </Form>
                </Card>
            </Col>
        </Row>
    );
  };
                
      

export default Register;