import { Button } from "antd"
import { NavLink } from "react-router-dom"
import {
    UserOutlined,
}
from '@ant-design/icons';
import ButtonLogout from "../../components/ButtonLogout"
const ButtonAdmin = () => {
    return (
        <>
            <NavLink to="/admin">
                <Button
                    icon={<UserOutlined />}
                >
                    Quản lý
                </Button>
            </NavLink>
            <ButtonLogout />
        </>
    )
}
export default ButtonAdmin