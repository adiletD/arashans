import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  // this proudcts: [] gonna be shown in the browser
  //we gonna evaulate the type of action, may contain a payload
  switch (action.type) {
    //prod liust req
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] } //loading, when req, we want the componenet to know that it is loading
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload } // loading is already done since we have the list of products
    // products are filled with the payload
    case PRODUCT_LIST_FAIL: //404 or smth like that
      return { loading: false, error: action.payload } //we send error in the payload
    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  // this proudcts: [] gonna be shown in the browser
  //we gonna evaulate the type of action, may contain a payload
  switch (action.type) {
    //prod liust req
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state } //loading, when req, we want the componenet to know that it is loading
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload } // loading is already done since we have the list of products
    // products are filled with the payload
    case PRODUCT_DETAILS_FAIL: //404 or smth like that
      return { loading: false, error: action.payload } //we send error in the payload
    default:
      return state
  }
}

//to use th reducer we have to import it to store js
