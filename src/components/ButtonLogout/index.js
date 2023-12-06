import { Button } from "antd"
import {
    LoginOutlined
} from "@ant-design/icons";
import { deleteAllCookies } from "../../helpers/cookie";
const ButtonLogout = () => {
    const handleLogout = () => {
        deleteAllCookies()
    }
    return (
    <a href="/">
        <Button
            icon={<LoginOutlined />}
            onClick={handleLogout}
        >
            Đăng xuất
        </Button>
    </a>
    )
}
export default ButtonLogout;