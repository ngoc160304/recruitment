import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
import "./Logo.scss"
const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo" />
                <div className="logo__content">
                    <div className="logo__title">CUBETECH</div>
                    <div className="logo__text">PREMIUM</div>
                </div>
            </Link>
        </div>
    )
}
export default Logo;