import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CLEAR_ERRORS,
} from "../constants/userConstants"

export const authReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticatedUser: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                isAuthenticatedUser: true,
                user: action.payload  
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading:false,
                isAuthenticatedUser: false,
                user:null,
                error: action.payload
            }  
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}