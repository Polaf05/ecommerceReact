import {applyMiddleware , combineReducers, compose ,createStore} from 'redux';
import thunk from 'redux-thunk';
import {productDetailsReducer, productListReducer, productCreateReducer} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer , userDetailsReducer, userUpdateProfileReducer, userRegisterReducer} from './reducers/userReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer,  orderMineListReducer,} from './reducers/orderReducers';

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
          shippingAddress: localStorage.getItem('shippingAddress')
          ? JSON.parse(localStorage.getItem('shippingAddress'))
          : {},

          paymentMethod: 'PayPal',

      },
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
};

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    productCreate: productCreateReducer, 
    cart: cartReducer, 
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,

})
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnchancer(applyMiddleware(thunk)) );

export default store;