import { useEffect, useState } from "react";
import { getListCompany } from "../../services/companyService";
import { Button, Card, Col, Row } from "antd";
import "./CompanyList.scss";
import { Link } from "react-router-dom";

const CompanyList = () => {
    const [ companyList, setCompanyList ] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await getListCompany(1, 3);
            setCompanyList(data);
        };
        fetchApi();
    }, [])
    return (
        <div className="company">
            <div className="company__content">
                <b>Danh sách công ty :</b>
            </div>
            <Row  gutter={[16, 16]}>
                {
                    companyList.map((item) => (
                        <Col span={8} key={item.id}>
                            <Card
                                title={<Link 
                                    to={'/company/' + item.id}
                                    style={{
                                        color: "#000"
                                    }}
                                >
                                    {item.companyName}
                                </Link>} 
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
                <Link to='/company'>
                    <Button>Xem thêm</Button>
                </Link>
            </div>
        </div>
    )
}
export default CompanyList;