import { 
    // Checkbox,
    Col, 
    Form, Input, 
    InputNumber, Select, 
    Switch } from "antd";
import React, { useEffect, useState } from "react";
import { getTagList } from "../../services/tagsService";
import { getListCity } from "../../services/cityService";

const FormEdit = () => {
    // const { record, form } = props;
    // const value = record.status ? "checked" : undefined;
    const [tags, setTagList] = useState([]);
    const [city, setCity] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const tagList = await getTagList();
            const cityList = await getListCity();
            setTagList(tagList);
            setCity(cityList)
        }
        fetchApi();
    }, []);
    return (
        <>
            <Col span={24} >
                <Form.Item
                    label="Tên job :"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập tên job !"
                        }
                    ]}
                    name="name"
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={16} >
                <Form.Item
                    label="Kĩ năng :"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng chọn kĩ năng !"
                        }
                    ]}
                    name="tags"
                >
                    <Select
                        options={tags}
                        mode="multiple"
                    />
                </Form.Item>
            </Col>
            <Col span={8} >
                <Form.Item
                    label="Mức lương :"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng chọn mức lương !"
                        }
                    ]}
                    name="salary"

                >
                    <InputNumber addonAfter="$"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>
            <Col span={24} >
                <Form.Item
                    label="Cơ sở làm việc :"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng chọn trụ sở !"
                        }
                    ]}
                    name="city"
                >
                    <Select
                        options={city}
                        mode="multiple"
                    />
                </Form.Item>
            </Col>
            <Col span={24} >
                <Form.Item
                    label="Mô tả công việc :"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mô tả !"
                        }
                    ]}
                    name="description"
                >
                    <Input.TextArea rows={10} />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item
                    label="Trạng thái :"
                    name="status"
                    valuePropName="checked"
                >
                    <Switch checkedChildren="public" unCheckedChildren="private" />
                </Form.Item>
            </Col>
        </>
    )
}
export default FormEdit;