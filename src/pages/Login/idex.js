import { Button, Form, Input } from "antd";
import "./Login.scss";
import { useState } from "react";
import { getCompany } from "../../services/companyService";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { authen } from "../../actions/account";
import { useDispatch } from "react-redux"
const Login = () => {
    const navigate = useNavigate();
    const [ loading, setLoaing ] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = (data) => {
        // setLoaing(true)
        const fetchApi = async () => {
            const company = await getCompany(data);
            if(company.length >= 1) {
                navigate("/");
                setCookie("token", company[0].token, 1000);
                setCookie("id", company[0].id, 1000);
                setCookie("email", company[0].email, 1000);
                dispatch(authen(company[0].token));

            }
            else {
                setLoaing(false)
            }
        }
        fetchApi();
    }

    return (
        <>
            <div className="login-form">
                <Form layout="vertical" onFinish={handleSubmit}>
                    <h2 className="login-form__title">Đăng Nhập Tài Khoản</h2>
                    <Form.Item
                        label="Địa chỉ email :"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập email"
                            },
                            {
                                type: "email",
                                message: "Địa chỉ email không hợp lệ"
                            }
                        ]}
                        className="login-form__input"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu :"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập mật khẩu"
                            }
                        ]}
                        className="login-form__input"   
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        className="login-form__input"
                    >
                        <Button htmlType="submit" loading={loading}>
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default Login;