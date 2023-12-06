import { get } from "../utils"

export const getListCity = async () => {
    const data = await get('city');
    return data;
}