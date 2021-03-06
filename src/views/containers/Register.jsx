import React,{ useState }from 'react'
import { Form, Input, Button, notification } from 'antd';
import { register } from '../../redux/actions/users.js'
const Register = props => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)

    const onFinish = values => {
        setLoading(true)
        const user = {
            fullName: values.fullName,
            email: values.email,
            password: values.password,
        }
        register(user)
            .then(res => {
                setLoading(false)
                notification.success({ message: 'Register', description: 'Se ha enviado un correo de confirmacion a su bandeja de entrada' })
                localStorage.setItem('userId', res.data.userId)
                setTimeout(() => {
                    props.history.push('/confirmacion')
                }, 1500);
            })
            .catch(error => {
                setLoading(false)
                notification.error({ message: 'Error', description: 'hubo un error al crear el usuario'  })
            })
    };

    return (
        <div className="container mb-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="card shadow mt-5 animated bounceInRight">
                    <div className="card-title text-center mt-4 mb-0">
                        <h1> Registro </h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="container col-sm-12">
                                <Form form={form} name="register" onFinish={onFinish} scrollToFirstError >
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
                                            <Button type="primary" htmlType="submit" loading={loading}>
                                                {loading ? ('Cargando...') : ('Registrar')}
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

    );
};
export default Register;