import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCvByid } from "../../services/cvService";
import { getJobById } from "../../services/jobsService";
import InfoCandidate from "./InfoCandidate";
import InfoJob from "./InfoJob";
import "./CvDetail.scss"
import GoBack from "../../components/GoBack";

const CvDetail = () => {
    const { id } = useParams();
    const [ result, setResult ] = useState({});
    useEffect(() => {
        const fetchApi = async () => {
            const cv = await getCvByid(id);
            const job = await getJobById(cv[0].idJob);
            const option = {
                cv: {...cv[0]},
                job: {...job[0]}
            }
            setResult(option);
        }
        fetchApi();
    },[id])
    return (
        <>
            {
                result.cv ? (
                    <div className="cv-detail">
                        <div className="cv-detail__button">
                            <GoBack />
                        </div>
                        <div className="cv-detail__content">
                            <InfoCandidate data={result.cv}/>
                        </div>
                        <div className="cv-detail__content">
                            <InfoJob data={result.job}/>
                        </div>
                    </div>
                ) : (
                    null
                )
            }
        </>
    )
}
export default CvDetail;