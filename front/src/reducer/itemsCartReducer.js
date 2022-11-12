import {
    ALL_ITEMS_REQUEST,
    ALL_ITEMS_SUCCESS,
    ALL_ITEMS_FAIL,
    CLEAR_ERROR_ITEMS
} from "../actions/itemsCartActions"

export const cartItemsReducer = (state = { itemsCart:[] },action) =>{
    switch (action.type) {
        case ALL_ITEMS_REQUEST:
            return {
                loading:true,
                itemsCart:[]
            }

        case ALL_ITEMS_SUCCESS:
            return {
                loading:false,
                itemsCart: action.payload.itemsCart,
                itemsCount: action.payload.itemsCount
            }

        case ALL_ITEMS_FAIL:
            return {
                loading:false,
                error:action.payload
            }

        case CLEAR_ERROR_ITEMS:
            return {
                ...state,
                error:null
            }
    }
}