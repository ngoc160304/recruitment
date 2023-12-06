import { getCookie } from "../helpers/cookie";
import { get, patch, post } from "../utils"

export const getCompany = async (data) => {
    const result = await get(`company?email=${data.email}&password=${data.password}`);
    return result;
}
export const createCompany = async (option) => {
    const result = await post(`company`, option);
    return result;
}
export const getListCompany = async (page, limit) => {
    let required = "";
    if(page && limit) {
        required = `?_page=${page}&_limit=${limit}`
    }
    const result = await get(`company${required}`);
    return result;
}
export const getCompanyByid = async (data) => {
    let required = "?";
    if(Array.isArray(data)) {
        data.forEach((item) => {
            required += `id=${item}&`
        });
    }
    else {
        required += "id=" + data;
    }
    const result = await get(`company${required}`);
    return result;
}
export const updateCompany = async (option) => {
    const id = getCookie("id");
    const result = await patch(`company/${id}`, option);
    return result;
}