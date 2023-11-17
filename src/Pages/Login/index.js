import './Login.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { handleLoginApi } from '~/service/userService';

import { toast } from 'react-toastify';
import Toastify from '~/components/Toastify';

import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isHandlingLogin, setIsHandlingLogin] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (emaill, passwordd) => {
        setIsHandlingLogin(true);
        let res = await handleLoginApi(emaill, passwordd);
        console.log(res);
        setTimeout(() => {
            setIsHandlingLogin(false);
        }, 800);

        if (res.status) {
            const userData = res.user_data;
            sessionStorage.setItem('user_data', JSON.stringify(userData));
            sessionStorage.setItem('isLogin', res.status);
            toast.success(res.message);
            setTimeout(() => {
                toast.success('Đưa bạn về trang chủ sau 3s');
            }, 500);
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } else {
            toast.error(res.message);
            sessionStorage.setItem('user_data', '{}');
            sessionStorage.setItem('isLogin', res.status);
        }
    };
    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleOnChangePass = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="app">
            <div className="block">
                <div className="content">
                    <h1>ĐĂNG NHẬP</h1>
                    <div className="login-form">
                        <input
                            type="email"
                            onChange={handleOnChangeEmail}
                            value={email}
                            name="email"
                            className="form-control"
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            onChange={handleOnChangePass}
                            value={password}
                            name="password"
                            className="form-control"
                            placeholder="Mật khẩu"
                        />
                        <button onClick={() => handleLogin(email, password)} className="btn-submit" type="submit">
                            {isHandlingLogin && <FontAwesomeIcon icon={faSpinner} spin size="sm" />} &nbsp; ĐĂNG NHẬP
                        </button>
                        <Toastify />
                        <button className="forgot-pass"> Quên mật khẩu</button>
                        <br />
                        <div className="register-btn">
                            Bạn chưa có tài khoản? <a href="/register"> Đăng ký</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
