import {  useEffect, useState } from "react";
import { getCvByIdCombany } from "../../services/cvService";
import { getCookie } from "../../helpers/cookie";
import { getJobById } from "../../services/jobsService";
import TableCV from "./TableCV";

const CvManage = () => {
    const [ data, setData ] = useState([]);
    const fetchApi = async () => {
        const option = [];
        const infoCv = await getCvByIdCombany(getCookie("id"));
        const set = new Set();
        infoCv.forEach((item) => {
            set.add(item.idJob);
        });
        const idJobs = [...set];
        const job = await getJobById(idJobs);
        for(let i = 0; i < infoCv.length; i++) {
            option.push({
                ...infoCv[i],
                jobName: job.find((item) => {
                    return item.id === infoCv[i].idJob;
                }).name,
                key: i
            })
        }
        setData(option);
    }
    const handleReload = () => {
        fetchApi();
    }
    useEffect(() => {
        fetchApi();
    }, []);
    return (
        <div className="cv-manage">
            <div className="cv-manage__table">
                <TableCV data={data} onReload={handleReload}/>
            </div>
        </div>
    )
}
export default CvManage;