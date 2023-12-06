import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { getJobByIdCompany } from "../../services/jobsService";
import { getCvByIdCombany } from "../../services/cvService";
import { getCompanyByid } from "../../services/companyService";
import { Card, Col, Row } from "antd";
import "./Admin.scss"

const Admin = () => {
    const [ data, setData ] = useState();
    const idCompany = getCookie("id");
    useEffect(() => {
        const fetchApi = async () => {
            const jobs = await getJobByIdCompany(idCompany);
            const cv = await getCvByIdCombany(idCompany);
            const company = await getCompanyByid(idCompany);
            const option = {
                job: {
                    quantity: 0,
                    jobOn: 0,
                    jobOff: 0
                },
                cv: {
                    quantity: 0,
                    cvOn: 0,
                    cvOff: 0
                },
                info: {
                    ...company[0]
                }
            };
            jobs.forEach((item) => {
                option.job.quantity += 1;
                if(item.status) {
                    option.job.jobOn += 1;
                }
                else {
                    option.job.jobOff +=1
                }
            });
            cv.forEach((item) => {
                option.cv.quantity += 1;
                if(item.statusRead) {
                    option.cv.cvOn += 1;
                }
                else {
                    option.cv.cvOff += 1;
                }
            });
            setData(option);
        }
        fetchApi();
    }, [idCompany])
    return (
        <div className="admin">
            {
                data ? (
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <Card size="small" title="Job" className="admin__content">
                                <p><b>Số lượng công job: </b>{data.job.quantity}</p>
                                <p><b>Job đang bật: </b>{data.job.jobOn}</p>
                                <p><b>Job đang tắt: </b>{data.job.jobOff}</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card size="small" title="CV" className="admin__content">
                                <p><b>Số lượng CV: </b>{data.cv.quantity}</p>
                                <p><b>CV đã đọc: </b>{data.cv.cvOn}</p>
                                <p><b>CV chưa đọc: </b>{data.cv.cvOff}</p>
                                
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card size="small" title="Thông tin công ty" className="admin__content">
                                <p><b>Tên công ty: </b>{data.info.companyName}</p>
                                <p><b>Email: </b>{data.info.email}</p>
                                <p><b>Số điện thoại: </b>{data.info.phone}</p>
                                <p><b>Số nhân viên: </b>{data.info.quantityPeople}</p>
                            </Card>
                        </Col>
                    </Row>
                ) : (<></>) 
            }
        </div>
    )
}
export default Admin;