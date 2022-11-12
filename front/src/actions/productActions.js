import axios from 'axios';
<<<<<<< HEAD
import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/productConstants';

export const getProducts = ( currentPage =1, keyword='') => async(dispatch)=>{
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST})

        const {data} = await axios.get(`/api/productos?keyword=${keyword}&page=${currentPage}`)
=======

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAILURE,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILURE,
    CLEAR_ERRORS
} from '../constants/productConstants';

export const getProducts = (currentPage = 1, keyword="", precio) => async(dispatch)=>{
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST})

        let link=`/api/productos?keyword=${keyword}&page=${currentPage}&precio[gte]=${precio[0]}&precio[lte]=${precio[1]}`

        const {data} = await axios.get(link)
>>>>>>> jules

        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch (error){
        dispatch({
<<<<<<< HEAD
            type:ALL_PRODUCTS_FAIL,
=======
            type:ALL_PRODUCTS_FAILURE,
>>>>>>> jules
            payload: error.response.data.message
        })
    }
}
<<<<<<< HEAD
//VER DETALLE DEL PRODUCTO
=======

// VER DETALLE DEL PRODUCTO
>>>>>>> jules
export const getProductDetails = (id) => async(dispatch)=>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/producto/${id}`)
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    }catch (error){
        dispatch({
<<<<<<< HEAD
            type:PRODUCT_DETAILS_FAIL,
=======
            type:PRODUCT_DETAILS_FAILURE,
>>>>>>> jules
            payload: error.response.data.message
        })
    }
}
<<<<<<< HEAD
//clear error
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
=======


//clear error
export const clearErrors = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
>>>>>>> jules
    })
}