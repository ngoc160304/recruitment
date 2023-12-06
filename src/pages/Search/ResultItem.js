import { Card, Col, Tag, Tooltip } from "antd";
import { Link } from "react-router-dom";

const ResultItem = (props) => {
    const { item } = props;
    return (
        <Col span={8}>
            <Card 
            title={
                <Tooltip title={item.name}>
                    <Link
                        to={'/job/' + item.id} 
                        style={{color: "#000"}}
                    >
                            {item.name}
                    </Link>
                </Tooltip>
            } 
            className="result-search__item"
            >
                <p><b>Kĩ năng : </b>
                    {
                        item.tags.map((item, index) => (
                            <Tag color="processing" key={index}>{item}</Tag>
                        ))
                    }
                </p>
                <p><b>Cơ sở : </b>
                    {
                        item.city ? (
                            <>
                                {
                                    item.city.map((item, index) => (
                                        <Tag color="cyan" key={index}>{item}</Tag>
                                    ))
                                }
                            </>
                        ) : (null)
                    }
                </p>
                <p><b>Mức lương : </b>{item.salary}$</p>
                <p><b>Công ty : </b>{item.company}</p>
                <p><b>Ngày tạo : </b>{item.createAt}</p>
            </Card>
        </Col>
    )
}
export default ResultItem;
