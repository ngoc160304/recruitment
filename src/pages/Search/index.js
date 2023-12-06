import { Row, Tag } from "antd";
import { useSearchParams } from "react-router-dom";
import { getJobByKeyWord, getJobByTagName} from "../../services/jobsService";
import { useEffect, useState } from "react";
import ResultItem from "./ResultItem";
import { getCompanyByid } from "../../services/companyService";
import './Search.scss';
import GoBack from "../../components/GoBack";

const Search = () => {
    const [ searchParams , ] = useSearchParams();
    const city = searchParams.get('city');
    const keyword = searchParams.get('keyword') || "";
    const tag = searchParams.get(`tag`);
    const [ data, setData ] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const option = [];
            const set = new Set();
            let listIdCompany = []
            if(tag) {
                const jobs = await getJobByTagName(tag);
                jobs.forEach((item) => {
                    set.add(item.idCompany);
                })
                listIdCompany = [...set];
                const company = await getCompanyByid(listIdCompany);
                for(let i = 0; i< jobs.length; i++) {
                    const result = company.find((item) => {
                        return item.id === jobs[i].idCompany
                    });
                    if(jobs[i].status) {
                        option.push({
                            ...jobs[i],
                            company: result.companyName
                        });
                    }
                }
                setData(option);
            }
            else {
                const resultSearch = await getJobByKeyWord(keyword, city);
                resultSearch.forEach((item) => {
                    set.add(item.idCompany);
                });
                listIdCompany = [...set];
                const company = await getCompanyByid(listIdCompany);
                for(let i = 0; i < resultSearch.length; i++) {
                    const result = company.find((item) => {
                        return item.id === resultSearch[i].idCompany
                    });
                    if(resultSearch[i].status) {
                        option.push({
                            ...resultSearch[i],
                            company: result.companyName
                        })
                    }
                };
                setData(option);
            }
        }
        fetchApi();
    }, [city, keyword, tag]);
    return (
        <>
            <div className="result-search">
                <p><b> Trang kết quả tìm kiếm : </b>
                    {city && <Tag color="success">{city}</Tag>}
                    {keyword && <Tag color="success">{keyword}</Tag>}
                    {tag && <Tag color="success">{tag}</Tag>}
                </p>
                <Row gutter={[16, 16]}>
                    {
                        data.length ? (
                            <>
                                {
                                    data.map((item) => (
                                        <ResultItem item={item} key={item.id}/>
                                    ))
                                }
                            </>
                        ) : (null)
                    }
                </Row>
                <div className="result-search__button-back">
                    <GoBack/>
                </div>
            </div>
        </>
    )
}
export default Search;