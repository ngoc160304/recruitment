import GoBack from "../../components/GoBack";
import RecruitmentJob from "./RecruitmentJob";
import "./Recruitment.scss"

const Recruitment = () => {
    return (
        <div className="recruitment">
            <div className="recruitment__button-back">
                <GoBack />
            </div>
            <RecruitmentJob />
        </div>
    )
}
export default Recruitment;