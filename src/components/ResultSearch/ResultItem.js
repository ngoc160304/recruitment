import { Card, Col, Tag } from "antd";

const ResultItem = (prop) => {
    const { item } = prop;
    return (
        <>
            <Col span={8}>
                <Card size="small" title={item.name}>
                    <div>
                        Kĩ nẵng : {item.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </div>
                    <div>
                        Thành phố : {item.city.map((city, index) => (
                            <Tag key={index}>{city}</Tag>
                        ))}
                    </div>
                    <div>
                        Mức lương : {item.salary}
                    </div>
                    <div>
                        Công ty : {item.companyName}
                    </div>
                    <div>
                        Ngày tạo : {item.createAt}
                    </div>
                </Card>
            </Col>
        </>
    )
}
export default ResultItem;