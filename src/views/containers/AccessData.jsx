import React from 'react'
import { Form, Input, Button, notification } from 'antd';
import { updatePassword } from '../../redux/actions/users'

const AccessData = (props) => {
    const [form] = Form.useForm();
    const userEmail = props.user.email
    const onFinish = (values) => {
        const user = {
            email: userEmail,
            password: values.password,
            new_password: values.new_password
        }
        updatePassword(user)
            .then(res => {
                notification.success({ message: 'Register', description: 'Contraseña Actualizada' })
            })
            .catch(error => {
                notification.error({ message: 'Register', description: error.response.data.message })
            })
    };

    return (
        <div className="row p-1 d-flex justify-content-center">
            <div className="card shadow-sm animated bounceInRight px-2">
                <div className="card-body d-block text-center ">
                    <h5 className="my-3">Cambio de Contraseña</h5>
                    <Form className="mt-2" form={form} name="register" onFinish={onFinish} scrollToFirstError >
                        <Form.Item name="password" label="Antigua contraseña" rules={[
                            {
                                required: true,
                                message: 'Ingrese su contraseña',
                            },
                        ]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name="new_password" label="Nueva contraseña" rules={[
                            {
                                required: true,
                                message: 'Ingrese su nueva contraseña',
                            },
                        ]} hasFeedback >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="confirm" label="Confirme contraseña" dependencies={['new_password']} hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Ingrese la confirmación de la contraseña',
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('new_password') === value) {
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
                                    Enviar
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default AccessData
