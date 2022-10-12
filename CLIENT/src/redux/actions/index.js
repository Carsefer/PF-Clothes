import axios from "axios";
import { GET_PRODUCTS,
         GET_PRODUCT_DETAIL,
         ORDER_PRODUCTS_BY_NAME,
         ORDER_PRODUCTS_BY_SCORE } from "../action-types";

export const getProducts = () => {
    return async function (dispatch) {
        const products = await "products"
        dispatch({
            type: GET_PRODUCTS,
            payload: products
        })
    }
}

export const getProductDetail = (id) => {
    return async function (dispatch) {
        const detail = await axios.get(`http://localhost:3001/products/${id}`)
        dispatch({
            type: GET_PRODUCT_DETAIL,
            payload: detail.data
        })
    }
}

export const orderProductsByName = (orden) => {
    return async function (dispatch) {
        dispatch({
            type: ORDER_PRODUCTS_BY_NAME,
            payload: orden
        })
    }
}

export const orderProductsByScore = (orden) => {
    return async function (dispatch) {
        dispatch({
            type: ORDER_PRODUCTS_BY_SCORE,
            payload: orden
        })
    }
}