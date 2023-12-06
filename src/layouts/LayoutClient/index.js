import { Outlet } from "react-router-dom";
import "./LayoutClient.scss";
import { useSelector } from "react-redux";
import ButtonAccount from "./ButtonAccount";
import ButtonAdmin from "./ButtonAdmin";
import Logo from "../../components/Logo";
const LayoutClient = () => {
    const state = useSelector(state => state.accountReducer);
    return (
        <>
            <header className="header-client">
                <Logo />
                <div className="header-client__account">
                    {
                        state ? (
                            <ButtonAdmin/>
                            ) : (
                            <ButtonAccount />
                        )
                    }
                </div>
            </header>
            <main className="main">
                <Outlet />
            </main>

        </>
    )
}
export default LayoutClient;