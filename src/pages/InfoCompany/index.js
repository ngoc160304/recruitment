import { Button, Card, Form, Row, message } from "antd"
import FormItem from "./FormItem";
import './InfoCompany.scss';
import { useEffect, useState } from "react";
import { getCompanyByid, updateCompany } from "../../services/companyService";
import { getCookie } from "../../helpers/cookie";
const InfoCompany = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const [isDisabled, setIsDisabled] = useState(true);
    const [infoCompany, setInfoCompany] = useState([]);
    const fetchApi = async () => {
        const company = await getCompanyByid(getCookie("id"));
        setInfoCompany(company)
    }
    const handleReload = () => {
        fetchApi();
    }
    useEffect(() => {
        fetchApi();
    }, []);
    const openMessage = (data) => {
        if(data) {
            messageApi.open({
                key,
                type: 'success',
                content: 'Cập nhật thành công',
            });
        }
        else {
            messageApi.open({
                key,
                type: 'error',
                content: 'Cập nhật thất bại',
            });
        }
    }
    const handleSubmit = (data) => {
        
        messageApi.open({
            key,
            type: 'loading',
            content: 'Đang cập nhật',
        });
        const fetchApi = async () => {
            const newInfo = await updateCompany(data);
            openMessage(newInfo.companyName);
            setIsDisabled(true);
        }
        fetchApi();
        handleReload();
    }
    const [form] = Form.useForm();
    const handleCancel = () => {
        form.resetFields();
        setIsDisabled(true);
    }
    return (
        <>
            {
                infoCompany.length ? (
                    <>
                        {contextHolder}
                        <div className="info-company">
                            <Card
                                title="Thông tin công ty"
                                extra={
                                    <Button
                                        onClick={() => { 
                                            if(isDisabled === false) {
                                                form.resetFields();
                                            }
                                            setIsDisabled(!isDisabled) 
                                        }}
                                    >
                                        {isDisabled ? ("Chỉnh sửa") : ("Hủy")}
                                    </Button>
                                }
                            >
                                <Form layout="vertical"
                                    form={form}
                                    disabled={isDisabled}
                                    initialValues={infoCompany[0]}
                                    preserve={true}
                                    onFinish={handleSubmit}
                                >
                                    <Row gutter={[16, 16]}>
                                        <FormItem onCancel={handleCancel}/>
                                    </Row>
                                </Form>

                            </Card>
                        </div>

                    </>
                ) : (
                    <></>
                )
            }
        </>
    )
}
export default InfoCompany;