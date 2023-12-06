import { Button, Card, Col, Form, Input, Row, Select, notification } from "antd";
import { createCV } from "../../services/cvService";
const { TextArea } = Input;

const FormApply = (props) => {
    const { data, token } = props;
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    console.log(data);
    const newCity = [];
    data.city.forEach((item) => {
        newCity.push({
            value: item,
            label: item
        })
    });
    const handleSubmit = async (e) => {
        const date = new Date();
        const time = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        e.createAt = time;
        e.idJob = data.id;
        e.idCompany = data.idCompany;
        const create = await createCV(e);
        form.resetFields();
        if(create.name) {
            api.success({
                message: `Ứng tuyển thành công`,
                description: <div>Nhà tuyển dụng sẽ liện hệ bạn sớm nhất</div>,
            });
        }
        else {
            api.error({
                message: `Hệ thống đang lỗi`,
                description: <div>Vui lòng thử lại sau it phút</div>,
            });
        }
    }
    return (
        <>
            {contextHolder}
            {
                token ? (null) : (
                    <Card title={<div id="form-apply">Ứng tuyển ngay</div>}>
                        <Form
                            layout="vertical"
                            onFinish={handleSubmit}
                            form={form}
                        >
                            <Row gutter={[16, 0]}>
                                <Col span={6}>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message: "Vui lòng nhập họ tên !"
                                            }
                                        ]}
                                        name="name"
                                        label="Họ và tên :"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message: "Vui lòng nhập số điện thoại !"
                                            }
                                        ]}
                                        name="phone"
                                        label="Số điện thoại :"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message: "Vui lòng nhập email !"
                                            }
                                        ]}
                                        name="email"
                                        label="Nhập email :"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message: "Vui lòng chọn thành phố !"
                                            }
                                        ]}
                                        name="city"
                                        label="Thành phố :"
                                    >
                                        <Select options={newCity}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message: "Vui lòng giới thiệu bản thân !"
                                            }
                                        ]}
                                        name="description"
                                        label="Giới thiểu bản thân :"
                                    >
                                        <TextArea rows={7}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message: "Vui lòng nhập "
                                            }
                                        ]}
                                        name="linkProject"
                                        label="Link project đã làm :"
                                    >
                                        <TextArea rows={7}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item>
                                        <Button htmlType="submit" className="recruitment__submit">Ứng Tuyển</Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                )
            }
        </>
    )
}
export default FormApply;