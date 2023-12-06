import { Button, Tag } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../../services/jobsService";
import { getCompanyByid } from "../../services/companyService";
import FormApply from "./FormApply";
import { useSelector } from "react-redux";

const RecruitmentJob = () => {
    const { id } = useParams();
    console.log(id);
    const [data, setData] = useState([]);
    const token = useSelector(state => state.accountReducer);
    console.log(token)
    useEffect(() => {
        const fetchApi = async () => {
            const option = []
            const job = await getJobById(id);
            const company = await getCompanyByid(job[0].idCompany);
            option.push({
                ...job[0],
                addressCompany: company[0].address,
                detailCompany: company[0].description
            });
            setData(option)
        }
        fetchApi();
    }, [id]);
    return (
        <>
            {
                data.length > 0 ? (
                    <>

                        <div className="recruitment__content">
                            <h1>{data[0].name}</h1>
                        </div>
                        {
                            token ? (null) : (
                                <div className="recruitment__button-recruit">
                                    <Button type="primary" href="#form-apply">ỨNG TUYỂN NGAY</Button>
                                </div>
                            )
                        }
                        <div className="recruitment__job">
                            <>
                                <p>
                                    <b>Kĩ năng : </b>
                                    {
                                        data[0].tags.map((item) => (
                                            <Tag key={item} color="processing">{item}</Tag>
                                        ))
                                    }
                                </p>
                                <p>
                                    <b>Cơ sở : </b>
                                    {
                                        data[0].city.length ? (
                                            <>
                                                {
                                                    data[0].city.map((item) => (
                                                        <Tag key={item} color="cyan">{item}</Tag>
                                                    ))
                                                }
                                            </>
                                        ) : (null)
                                    }
                                </p>
                                <p>
                                    <b>Mức lương : </b>{data[0].salary}$
                                </p>
                                <p>
                                    <b>Địa chỉ công ty : </b>{data[0].addressCompany}
                                </p>
                                <p><b>Mô tả công việc:</b></p>
                                <p>{data[0].description}</p>
                                <p><b>Giới thiệu công ty : </b></p>
                                <p>{data[0].detailCompany}</p>
                            </>
                        </div>
                        <FormApply data={data[0]} token={token}/>
                    </>
                ) : (
                    null
                )
            }
        </>
    )
}
export default RecruitmentJob;