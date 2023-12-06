import { Form, Row, message } from "antd";
import FormItem from "./FormItem";
import "./CreateJob.scss"
import { createJob } from "../../services/jobsService";
import { getCookie } from "../../helpers/cookie";


const CreateJob = () => {
    const [ form ] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'create';
    const handleSubmit = (data) => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Đang tạo Job'
        })
        if(!data.status) {
            data.status = false
        }
        const date = new Date();
        data.salary = data.salary.toString();
        data.idCompany = parseInt(getCookie("id"));
        const time = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        data.createAt = time;
        const fetchApi = async () => {
            const result = await createJob(data);
            console.log(result);
            form.resetFields();
        }
        fetchApi();
        messageApi.open({
            key,
            type: 'success',
            content: 'Tạo Job thành công'
        })
    }
    
    return (
        <>
            {contextHolder}
            <div className="form-create-job">
                
                <Form
                    layout="vertical"
                    onFinish={handleSubmit}
                    form={form}
                >
                    <Row gutter={[16, 0]}>
                        <FormItem />
                    </Row>
                </Form>
            </div>
        </>
    )
};
export default CreateJob;
