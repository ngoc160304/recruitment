import { Button, Col, Form, Input, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { getListCity } from "../../services/cityService";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [ listCity, setListCity ] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
            const data = await getListCity();
            data.push({
                key: 4,
                value: "All City"
            });
            setListCity(data);
        }
        fetchApi();
    }, []);
    const handleSearch = async (data) => {
        const keyword = data.textSearch || "";
        const city = data.city || "All City";
        if(data.textSearch || data.city) {
            navigate(`/search?city=${city}${keyword ? `&keyword=${keyword}` : ""}`);
        }
    }
    return (
        <>
            <div className="main-content">
                <h1>1000+ IT For Jobs Developer ^^</h1>
            </div>
            <div className="search-form">
                <Form
                    onFinish={handleSearch}
                >
                    <Row gutter={[16, 16]}>
                        <Col span={5}>
                            <Form.Item
                                name="city"
                                className="search-form__input"
                            >
                                <Select placeholder="Chọn thành phố" options={listCity}/>
                            </Form.Item>
                        </Col>
                        <Col span={15}>
                            <Form.Item 
                                name="textSearch"
                                className="search-form__input"
                            >
                                <Input placeholder="Nhập công việc muốn tìm kiếm..." />
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item
                                className="search-form__input"
                            >
                                <Button htmlType="submit" type="primary">Tìm kiếm</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}
export default Search;