import { useEffect, useState } from "react";
import { getTagList } from "../../services/tagsService";
import { Tag } from "antd";
import { Link } from "react-router-dom";

const TagList= () => {
    const [ tagList, setTagList ] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await getTagList();
            setTagList(data);
        }
        fetchApi();
    }, []);
    return (
        <>
            <div>
                {
                    tagList.map((item) => (
                        <Link key={item.key} to={"search?tag=" + item.value}>
                            <Tag  
                                color="processing" 
                                style={{
                                    padding: "4px 6px",
                                    marginBottom: "10px",
                                }}
                            >
                                {item.value}
                            </Tag>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
export default TagList;