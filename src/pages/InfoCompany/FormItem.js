import { Button, Col, Form, Input} from "antd"
const { TextArea } = Input;
const FormItem = (props) => {
    const { onCancel } = props;
    return (
        <>
                <Col span={24}>
                    <Form.Item
                        label="Tên công ty :"
                        name="companyName"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập tên công ty!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Email :"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập địa chỉ Email !"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Số điện thoại :"
                        name="phone"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Địa chỉ :"
                        name="address"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Số lượng nhân sự :"
                        name="quantityPeople"

                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Thời gian làm việc :"
                        name="workingTime"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Link website :"
                        name="website"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        label="Mô tả ngắn :"
                        name="description"
                    >
                        <TextArea  rows={4}/>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        label="Mô tả chi tiết :"
                        name="detail"
                    >
                        <TextArea rows={9}/>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item>
                        <Button htmlType="submit" 
                            style={{
                                marginRight: "8px"
                            }}
                            type="primary"
                        >
                            Cập nhật
                        </Button>
                        <Button onClick={() => { onCancel() }}>
                            Hủy
                        </Button>
                    </Form.Item>
                </Col>
        </>
    )
}
export default FormItem;