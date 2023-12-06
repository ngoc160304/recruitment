import { Button } from "antd"
import { NavLink } from "react-router-dom"

const ButtonAccount = () => {
    return (
        <>
            <NavLink to='login' className="header-client__login">
                <Button>
                    Login
                </Button>
            </NavLink>
            <NavLink to='register' className="header-client__login">
                <Button >
                    Sign in
                </Button>
            </NavLink>
        </>
    )
}
export default ButtonAccount