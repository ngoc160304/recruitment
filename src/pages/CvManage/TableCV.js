import { Button, Popconfirm, Table, Tag, Tooltip, message } from "antd";
import { Link } from "react-router-dom";
import{ EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteCv, updateCv } from "../../services/cvService";
const TableCV = (props) => {
    const { data, onReload } = props;
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'delete';
    const handleChecked = async (record) => {
        await updateCv(record.id, {statusRead : true});
    }
    const handleDelete = async (record) => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Đang xóa dữ liệu'
        })
        await deleteCv(record.id);
        onReload();
        messageApi.open({
            key,
            type: 'success',
            content: 'Xóa dữ liệu thành công'
        })
    }

    const columns = [
        {
            title: "Tên Job",
            dataIndex: "jobName",
            key: 1
        },
        {
            title: "Họ tên",
            dataIndex: "name",
            key: 2
        },
        {
            title: "Số điện thoại",
            dataIndex: "phone",
            key: 3
        },
        {
            title: "Email",
            dataIndex: "email",
            key: 4
        },
        {
            title: "Ngày gửi",
            dataIndex: "createAt",
            key: 5
        },
        {
            title: "Trạng thái",
            dataIndex: "statusRead",
            key: 6,
            render: (_, { statusRead }) => (
                <>
                    {
                        statusRead ? (
                            <Tag color="success">Đã đọc</Tag>
                        ) : (
                            <Tag color="warning">Chưa đọc</Tag>
                        )
                    }
                </>
            )
        },
        {
            title: "Hành động",
            key: 7,
            render: (_, record) => (
                <>
                    <Link to={"/cv-detail/" + record.id}>
                        <Tooltip title="Xem chi tiết">
                            <Button 
                                icon={<EyeOutlined />}
                                style={{
                                    marginRight: "8px"
                                }}
                                onClick={() => {handleChecked(record)}}
                            /> 
                        </Tooltip>
                    </Link>
                    <Popconfirm
                        placement="topRight"
                        description="Xóa tác vụ"
                        title="Bạn có chắc xóa tác vụ này không ?"
                        okText="Xác nhận"
                        cancelText="Hủy"
                        onConfirm={() => {handleDelete(record)}}
                    >
                        <Tooltip title="xóa tác vụ">
                            <Button
                                icon={<DeleteOutlined />}
                                style={{
                                    color: "red"
                                }}
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
            <Table 
                columns={columns} 
                dataSource={data} 
                pagination={false} 
                style={{
                    border: "1px solid #ddd"
                }}
            />
        </>
    )
}
export default TableCV;