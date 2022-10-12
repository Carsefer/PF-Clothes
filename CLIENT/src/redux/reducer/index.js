import { GET_PRODUCTS,
         GET_PRODUCT_DETAIL,
         ORDER_PRODUCTS_BY_NAME,
         ORDER_PRODUCTS_BY_SCORE } from "../action-types"

const initialState = {
    products: [],
    productDetail: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: action.payload
            }
        case ORDER_PRODUCTS_BY_NAME:
            const orderedProductsByName = action.payload === "ascendente" ? 
            state.products.sort((a, b) => {
                return a.name - b.name
            }) :
            state.products.sort((a, b) => {
                return b.name - a.name
            })
            return {
                ...state,
                products: orderedProductsByName
            }
        case ORDER_PRODUCTS_BY_SCORE:
            const orderedProductsByScore = action.payload === "ascendente" ? 
            state.products.sort((a, b) => {
                return a.score - b.score
            }) :
            state.products.sort((a, b) => {
                return b.score - a.score
            })
            return {
                ...state,
                products: orderedProductsByScore
            }
        default: return state
    }
}

export default rootReducer