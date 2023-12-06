import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobByKeyWord, getJobByTagName } from "../../services/jobsService";
import { Row } from "antd";
import { getCompanyByid } from "../../services/companyService";
import ResultItem from "./ResultItem";

const ResultSearch = () => {
    const { city, keyword, tag } = useParams();
    console.log(tag)
    const [ result, setResult ] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            if(tag) {
                const data = await getJobByTagName(tag);
                setResult(data);
            }
            else {
                const jobs = await getJobByKeyWord(keyword, city);
                const idCompany = jobs.map((item) => {
                    return item.idCompany;
                });
                const companys = await getCompanyByid(idCompany);
                const data = jobs.map((item, index) => {
                    item.companyName = companys[index].companyName;
                    return item;
                })
                setResult(data);
            }
        }

        fetchApi();
    }, [city, keyword, tag]);
    console.log(result);
    return (
        <Row gutter={[16, 16]}>
            {
                result.map((item) => {
                    return (
                        <ResultItem item={item} key={item.id}/>
                    )
                })
            }
        </Row>
    )
}
export default ResultSearch;