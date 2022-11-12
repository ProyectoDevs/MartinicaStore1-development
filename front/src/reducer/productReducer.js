<<<<<<< HEAD
import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/productConstants";

export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
=======
import { ALL_PRODUCTS_REQUEST, 
    ALL_PRODUCTS_SUCCESS, 
    ALL_PRODUCTS_FAILURE,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILURE,
    CLEAR_ERRORS} from "../constants/productConstants";

export const productsReducer = (state ={ products: []}, action)=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return{
                loading:true,
                products:[]
            }

        case ALL_PRODUCTS_SUCCESS:
            return{
                loading:false,
>>>>>>> jules
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resPerPage: action.payload.resPerPage,
                filteredProductsCount: action.payload.filteredProductsCount
            }

<<<<<<< HEAD
        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
=======
        case ALL_PRODUCTS_FAILURE:
            return{
                loading:false,
>>>>>>> jules
                error: action.payload
            }

        case CLEAR_ERRORS:
<<<<<<< HEAD
            return {
                ...state,
                error: null
            }

=======
            return{
                ...state,
                error:null
            }
        
>>>>>>> jules

        default:
            return state;
    }
}
<<<<<<< HEAD
//REDUCER PARA TENER TODOS LOS DETALLES
export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
=======

//REDUCER PARA TENER TODOS LOS DETALLES
export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {

>>>>>>> jules
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
<<<<<<< HEAD
=======

>>>>>>> jules
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
<<<<<<< HEAD
        case PRODUCT_DETAILS_FAIL:
=======

        case PRODUCT_DETAILS_FAILURE:
>>>>>>> jules
            return {
                ...state,
                error: action.payload
            }
<<<<<<< HEAD
=======

>>>>>>> jules
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
<<<<<<< HEAD
=======

>>>>>>> jules
        default:
            return state
    }
}