import { Form, Input, Button, Checkbox } from "antd";

import LoginBg from '../../assets/login_bg.png'
import GooglePlay from '../../assets/google_play.png'
import AppStore from '../../assets/app_store.png'

import './index.css'

const REQUIRED_RULES = (type: string) => {
    return [{
        required: true,
        message: `${type} is not allowed empty`
    }]
}

function Login() {
    const [form] = Form.useForm()
    
    const handleLogin = async () => {
        try {
            await form.validateFields()
            const data = form.getFieldsValue()
            console.log(data);
            // await fetch('https://clare4.ngrok.io/api/v1/login'/)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="login-container">
            <div className="login-bg-box">
                <img className="login-bg-img" src={LoginBg} alt="" />
                <div className="login-bg-box-bottom">
                    <img src={GooglePlay} alt="" />
                    <img src={AppStore} alt="" />
                </div>
            </div>
            <div className="login-form-box">
                <div className="login-form-title">Login</div>
                <Form className="login-form" form={form} layout="vertical">
                    <Form.Item label='Email' name='name' rules={REQUIRED_RULES('Email')}>
                        <Input />
                    </Form.Item>
                    <Form.Item label='Password' name='password' rules={REQUIRED_RULES('Password')}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item className="remember-box">
                        <Checkbox>Remember me</Checkbox>
                        <a href="">Forgot Password?</a>
                    </Form.Item>
                    <Form.Item>
                        <Button className="login-btn" onClick={handleLogin}>Login</Button>
                    </Form.Item>
                </Form>
                <div className="register-box">
                    <span>Do have an account?</span>
                    <a href="">Register here</a>
                </div>
            </div>
        </div>
    )
}

export default Login
