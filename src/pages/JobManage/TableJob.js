import { Button, Table, } from "antd";
import { Link } from "react-router-dom"

const TableJob = (props) => {
    const { columns, data } = props;
    return (
        <>
            <div className="table">
                <div className="table__content">
                    <Link to="/create-job">
                        <Button className="table__add-job">
                            + Thêm mới việc làm
                        </Button>
                    </Link>
                </div>
                <Table 
                    columns={columns} 
                    dataSource={data} 
                    pagination={false}
                />
            </div>
            
        </>
            
    )
}
export default TableJob;