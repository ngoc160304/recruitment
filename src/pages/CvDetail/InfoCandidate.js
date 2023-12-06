import { Card } from "antd"

const InfoCandidate = (props) => {
    const { data } = props;
    return (
        <Card title={"Ứng viên : " + data.name}
            className="info-cv"
        >
            <p><b>Ngày gửi : </b>{data.createAt}</p>
            <p><b>Số điện thoại : </b>{data.phone}</p>
            <p><b>Email : </b>{data.email}</p>
            <p><b>Thành phố ứng tuyển : </b>{data.city}</p>
            <p><b>Giới thiệu bản thân : </b>{data.description}</p>
            <p><b>Link dự án : </b>{data.linkProject}</p>
        </Card>
    )
}
export default InfoCandidate;