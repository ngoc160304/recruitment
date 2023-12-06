import { Button } from "antd"
import { useNavigate } from "react-router-dom";

const GoBack = () => {
    const navigate = useNavigate();
    return (
        <Button onClick={() => {navigate(-1)}}>
            Trở lại
        </Button>
    )
}
export default GoBack;