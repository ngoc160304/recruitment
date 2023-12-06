import { Tag } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../../services/jobsService";
import "./JobDetail.scss"
import GoBack from "../../components/GoBack";

const JobDetail = () => {
    const { id } = useParams();
    const [ job, setJob ] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await getJobById(id);
            setJob(data);
        }
        fetchApi();
    }, [id]);
    return (
        <>
            {
                job.length > 0 ? (
                    <div className="job-detail">
                        <div className="job-detail__button">
                            <GoBack />
                        </div>
                        <div className="job-detail__content">
                            <div className="job-detail__name">
                                <h2>Tên job-detail : {job[0].name}</h2>
                            </div>
                            <div className="job-detail__status">
                                <p>
                                    <b>Trạng thái : </b>
                                    {
                                        job.status ? (
                                            <Tag color="success">
                                                Public
                                            </Tag>
                                        ) : (
                                            <Tag color="warning">
                                                Private
                                            </Tag>
                                        )
                                    }
                                </p>
                            </div>
                            <div className="job-detail__skill">
                                <p>
                                    <b>Kĩ năng : </b>
                                    {
                                        job[0].tags.map((item) => (
                                            <Tag color="processing" key={item}>
                                                {item}
                                            </Tag>
                                        ))
                                    }
                                </p>
                            </div>
                            <div className="job-detail__salary">
                                <p>
                                    <b>Mức lương : </b>{job[0].salary}$
                                </p>
                            </div>
                            <div className="job-detail__city">
                                <p>
                                    <b>Cơ sở làm việc : </b>   
                                    {
                                        job[0].city.map((item) => (
                                            <Tag color="cyan" key={item}>
                                                {item}
                                            </Tag>
                                        ))
                                    }
                                </p>
                            </div>
                            <div className="job-detail__create-date">
                                <p>
                                    <b>Ngày tạo : </b>{job[0].createAt}
                                </p>
                            </div>
                            <div className="job-detail__update-date">
                                <p>
                                    <b>Thời gian cập nhât : </b>{job[0].updateAt}
                                </p>
                            </div>
                            <div className="job-detail__description">
                                <b>Mô tả chi tiết :</b>
                                <p>
                                    {job[0].description}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (null)
            }
        </>
        
    )
}
export default JobDetail;