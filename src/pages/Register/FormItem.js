import { Button, Form, Input } from "antd";

const FormItem = ({ loading }) => {
    return (
        <>
            <Form.Item
                label="Tên công ty :"
                name="companyName"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập tên công ty !"
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Địa chỉ email :"
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập địa chỉ email !"
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Số điện thoại :"
                name="phone"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập số điện thoại !"
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Mật khẩu :"
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập mật khẩu"
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Xác minh lại mật khẩu :"
                name="confirm"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập mật khẩu !"
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                                return Promise.reject(new Error('Mật khẩu nhập không khớp !'));
                        },
                    })
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="form-register__button" loading={loading}>
                    Đăng ký
                </Button>
            </Form.Item>
        </>
    )
}
export default FormItem;