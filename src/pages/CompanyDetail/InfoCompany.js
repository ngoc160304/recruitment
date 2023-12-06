const InfoCompany = (props) => {
    const { data } = props;
    const [ company ] = data;
    return (
        <div className="company-detail__content">
            <div className="company-detail__title">
                <h1>{company.companyName}</h1>
            </div>
            <div className="company-detail__info">
                <p>
                    <b>Địa chỉ : </b>{company.address}
                </p>
                <p>
                    <b>Số lượng nhân sự : </b>{company.quantityPeople}
                </p>
                <p>
                    <b>Thời gian làm vêc : </b>{company.workingTime}
                </p>
                <p>
                    <b>Link website : </b>{company.website}
                </p>
                <p>
                    <b>Mô tả ngắn : </b>
                </p>
                <p>
                    {company.description}
                </p>
                <p>
                    <b>Mô tả chi tiết : </b>
                </p>
                <p>
                    {company.detail}
                </p>
                <p>
                    <b>Danh sách các job :</b>
                </p>
            </div>
        </div>
    )
}
export default InfoCompany;