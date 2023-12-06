import { Button, Form, Modal, Popconfirm, Row, Tag, Tooltip, message } from "antd";
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined
} from "@ant-design/icons"
import { deleteJob, getJobByIdCompany, updateJob } from "../../services/jobsService";
import { getCookie } from "../../helpers/cookie";
import { useEffect, useRef, useState } from "react";
import TableJob from "./TableJob";
import "./JobManage.scss";
import FormEdit from "./FormEdit";
import { Link } from "react-router-dom";
const JobManage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'update';
    const [data, setData] = useState([]);
    const idJob = useRef(0);
    const [form] = Form.useForm();
    const [record, setRecord] = useState();
    const fetchApi = async () => {
        const data = await getJobByIdCompany(getCookie("id"));
        for (let i = 0; i < data.length; i++) {
            data[i].key = i;
        }
        setData(data.reverse());
    }
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCancelModal = () => {
        setShowModal(false);
    }

    useEffect(() => {
        fetchApi();
    }, []);
    const handleDelete = async (record) => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Đang xóa',
        });
        await deleteJob(record.id);
        fetchApi();
        message.destroy();
        messageApi.open({
            key,
            type: 'success',
            content: 'Xóa thành công',
        });
    }
    const handleUpdate = async () => {
        message.open({
            key,
            type: 'loading',
            content: 'Đang cập nhật'
        })
        const newData = form.getFieldsValue();
        const date = new Date();
        const time = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        newData.updateAt = time;
        await updateJob(idJob.current, newData);
        fetchApi();
        handleCancelModal();
        message.open({
            key,
            type: 'success',
            content: 'Cập nhật thành công'
        })
    }
    const columns = [
        {
            key: "1",
            dataIndex: "name",
            title: "Tên job"
        },
        {
            key: '2',
            dataIndex: "tags",
            title: "Kĩ nẵng",
            render: (_, { tags }) => {
                return (
                    <>
                        {
                            tags.map((item) => (
                                <Tag color="processing" key={item}>
                                    {item}
                                </Tag>
                            ))
                        }
                    </>
                )
            }
        },
        {
            key: '3',
            dataIndex: "salary",
            title: "Mức lương"
        },
        {
            key: '4',
            title: "Thời gian",
            render: (_, record) => {
                return (
                    <div key={record.id}>
                        <div>
                            <b>Ngày tạo:</b> {record.createAt}
                        </div>
                        <div>
                            <b>Ngày cập nhật:</b> {record.updateAt ? (record.updateAt) : ("Chưa cập nhật")}
                        </div>
                    </div>
                )
            }
        },
        {
            key: '5',
            dataIndex: "status",
            title: "Trạng Thái",
            render: (_, { status }) => (
                <>
                    {
                        status ? (
                            <Tag color="success" >
                                Public
                            </Tag>
                        ) : (
                            <Tag color="warning">
                                Private
                            </Tag>
                        )
                    }
                </>
            )
        },
        {
            key: '6',
            title: "Hành động",
            render: (_, record) => (
                <>
                    <Link to={"/job-detail/" + record.id}>
                        <Tooltip placement="top" title="xem chi tiết">
                            <Button
                                icon={<EyeOutlined />}
                                className="action__button"
                            />
                        </Tooltip>
                    </Link>
                    <Tooltip placement="top" title="chỉnh sữa">
                        <Button
                            icon={<EditOutlined />}
                            style={{
                                color: "#108ee9",
                            }}
                            onClick={() => {
                                handleOpenModal();
                                form.setFieldsValue(record);
                                idJob.current = record.id;
                                setRecord(record);
                            }}
                            className="action__button"
                        />
                    </Tooltip>
                    <Popconfirm
                        title='Bạn có chắc chắn xóa tác vụ này không?'
                        placement="topRight"
                        description="Xóa tác vụ"
                        okText="Xác nhận"
                        cancelText="Hủy"
                        onConfirm={() => { handleDelete(record) }}
                    >
                        <Tooltip placement="top" title='xóa tác vụ'>
                            <Button
                                icon={<DeleteOutlined />}
                                style={{
                                    color: "#f50",
                                }}
                                className="action__button"
                            />
                        </Tooltip>
                    </Popconfirm>
                </>
            )
        }
    ]
    return (
        <>
            {contextHolder}
            <TableJob columns={columns} data={data} key="1" />
            <Modal
                open={showModal}
                onCancel={handleCancelModal}
                onOk={handleUpdate}
            >
                <Form
                    layout="vertical"

                    form={form}
                >
                    <Row gutter={[16, 0]}>
                        <FormEdit record={record} form={form} />
                    </Row>
                </Form>
            </Modal>
        </>
    )
}
export default JobManage;