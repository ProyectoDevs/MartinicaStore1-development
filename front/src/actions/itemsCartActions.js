import axios from "axios";
import { ALL_ITEMS_FAIL, ALL_ITEMS_SUCCESS, CLEAR_ERROR_ITEMS } from "../constants/itemsCartConstants";

export const getitemsCart = async(dispatch) => {

    try {
        const {data} = await axios.get('/api/mycart')

        dispatch({
            type:ALL_ITEMS_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type:ALL_ITEMS_FAIL,
            payload:error.response.data.message
        })
    }
}

export const clearErrors = () => async(dispatch) => {
    dispatch({
        type:CLEAR_ERROR_ITEMS
    })
}