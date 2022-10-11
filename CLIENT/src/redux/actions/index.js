import { GET_PRODUCTS } from "../action-types";

export const getProducts = () => {
    return async function (dispatch) {
        const products = await "products"
        dispatch({
            type: GET_PRODUCTS,
            payload: products
        })
    }
}