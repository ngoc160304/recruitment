import { useEffect, useState } from "react";
import { getListCompany } from "../../services/companyService";
import { Card, Col, Row } from "antd";
import GoBack from "../../components/GoBack";
import { Link } from "react-router-dom";

const CompanyList = () => {
    const [ companyList, setCompanyList ] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await getListCompany();
            setCompanyList(data);
        };
        fetchApi();
    }, [])
    return (
        <div className="company">
            <div className="company__content">
                <b style={{
                    marginTop: "16px"
                }}>Danh sách công ty :</b>
            </div>
            <Row  gutter={[16, 16]}>
                {
                    companyList.map((item) => (
                        <Col span={8} key={item.id}>
                            <Card
                                
                                title={
                                    <Link
                                        to={'/company/' + item.id}
                                        style={{
                                            color: "#000"
                                        }}
                                    >
                                        {item.companyName}
                                    </Link>
                                } 
                                className="company__item"
                            >
                                <p>
                                    Sô lượng nhân viên : {item.quantityPeople}
                                </p>
                                <p>
                                    Địa chỉ : {item.address}
                                </p>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            <div className="company__button">
                <GoBack />
            </div>
        </div>
    )
}
export default CompanyList;