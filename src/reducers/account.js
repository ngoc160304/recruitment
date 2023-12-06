import { getCookie } from "../helpers/cookie";

export const accountReducer = (state = getCookie("token") || "", action ) => {
    switch (action.type) {
        case "SUCCESS":
            return action.token    
        default:
            return state;
    }
}