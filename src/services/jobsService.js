import { del, get, patch, post } from "../utils"

export const getJobByKeyWord = async (q, city) => {
    let requier = ""
    if(city !== "All City") {
        requier = `&city_like=${city}`
    }
    const result = await get(`jobs?q=${q}${requier}`);
    return result;
}
export const getJobByTagName = async (tag) => {
    const result = await get(`jobs?tags_like=${tag}`);
    return result;
}
export const getJobByIdCompany = async (id) => {
    const result = await get(`jobs?idCompany=${id}`);
    return result;
}
export const getJobById = async (id) => {
    let required = "?";
    if(Array.isArray(id)) {
        id.forEach((item) => {
            required += `id=${item}&`
        });
    }
    else {
        required += "id=" + id;
    }
    const result = await get(`jobs/${required}`);
    return result;
}
export const createJob = async (option) => {
    const result = await post('jobs', option);
    return result;
}
export const updateJob = async (id, option) => {
    const result = await patch(`jobs/${id}`, option);
    return result;
}
export const deleteJob= async (id) => {
    const result = await del(`jobs/${id}`);
    return result;
}