import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyByid } from "../../services/companyService";
import { getJobByIdCompany } from "../../services/jobsService";
import InfoCompany from "./InfoCompany";
import GoBack from "../../components/GoBack";
import "./CompanyDetail.scss"
import JobList from "./JobList";

const CompanyDetail = () => {
    const { id } = useParams();
    const [ data, setData ] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const company = await getCompanyByid(id);
            const job = await getJobByIdCompany(id);
            const option = [
                {
                    company: company,
                    job: job
                }
            ];
            setData(option);
        }
        fetchApi()
    }, [id])
    return (
        <>
        {
            data.length ? (
                <div className="company-detail">
                    <div className="company-detail__button-back">
                        <GoBack />
                    </div>
                    <InfoCompany data={data[0].company}/>
                    <JobList data={data[0].job}/>
                </div>
            ) : (
                null
            )
        }
        </>
    )
}
export default CompanyDetail;