import { Card, Col, Row, Tag } from "antd";
import { Link } from "react-router-dom";

const JobList = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <div className="job-list">
            <Row gutter={[16, 16]}>
                {
                    data.map((item) => (
                        <Col span={8}>
                            <Card
                                title={
                                <Link 
                                    to={'/job/' + item.id}
                                    style={{
                                        color: "#000"
                                    }}
                                >
                                    {item.name}
                                </Link>
                                }
                                size="small"
                            >
                                <p>
                                    <b>Kĩ năng : </b>
                                    {
                                        item.tags.map((item) => (
                                            <Tag color="cyan" key={item}>{item}</Tag>
                                        ))
                                    }
                                </p>
                                <p>
                                    <b>Cơ sở : </b> 
                                    {
                                        item.city.length ? (
                                            <>
                                                {
                                                    item.city.map((item) => (
                                                        <Tag color="processing" key={item}>{item}</Tag>
                                                    ))
                                                }
                                            </>
                                        ) : (null)
                                    }
                                </p>
                                <p>
                                    <b>Mức lương : </b>{item.salary}$
                                </p>
                                <p>
                                    <b>Ngày tạo : </b>{item.createAt}
                                </p>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}
export default JobList;