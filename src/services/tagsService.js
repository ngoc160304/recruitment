import { get } from "../utils"

export const getTagList = async () => {
    const result = await get('tags');
    return result;
}