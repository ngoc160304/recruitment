import { Card, Tag } from "antd";

const InfoJob = (props) => {
    const { data } = props;
    return (
        <Card title={"Thông tin job : " + data.name} className="info-job">
            <p><b>Kĩ năng : </b>{data.tags.map((item, index) => <Tag key={index} color="processing">{item}</Tag>)}</p>
            <p><b>Mức lương : </b>{data.salary}$</p>
            <p><b>Mô tả : </b> <br/> {data.description}</p>
        </Card>
    )
}
export default InfoJob;