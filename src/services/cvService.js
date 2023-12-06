import { del, get, patch, post } from "../utils"

export const getCvByid = async (id) => {
    const result = get(`cv?id=${id}`);
    return result;
}

export const getCvByIdCombany = async (id) => {
    const result = await get(`cv?idCompany=${id}`);
    return result;
}

export const deleteCv = async (id) => {
    const result = await del(`cv/${id}`);
    return result;
}

export const createCV = async (option) => {
    const result = await post('cv',option);
    return result;
}

export const updateCv = async (id, option) => {
    const result = await patch(`cv/${id}`, option);
    return result;
}
