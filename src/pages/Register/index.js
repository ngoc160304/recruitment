import { Form } from "antd";
import FormItem from "./FormItem";
import "./Register.scss";
import { createCompany } from "../../services/companyService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString() {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 19; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
const Register = () => {
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState(false);
    const handleSubmit = (data) => {
        delete data.confirm;
        // console.log(data);
        data.token = generateString();
        setLoading(true);
        const fetchApi = async () => {
            const result = await createCompany(data);
            if(result.id) {
                navigate("/login");
            }
            else {
                setLoading(false);
            }
        }
        fetchApi()
    }
    return (
        <div className="form-register">
            <Form
                layout="vertical"
                onFinish={handleSubmit}
            >
                <h2 className="form-register__title">Đăng ký Tài Khoản</h2>
                <FormItem loading={loading}/>
            </Form>
        </div>
    )
}
export default Register;