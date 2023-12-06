import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Error from "../../pages/Error";

const PrivateRouter = () => {
    const state = useSelector(state => state.accountReducer);
    return (
        <>
            {
                state ? (
                    <Outlet />
                ) : (
                    <Error />
                )
            }
        </>
    )
}
export default PrivateRouter;