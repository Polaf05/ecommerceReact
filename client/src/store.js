import {applyMiddleware , combineReducers, compose ,createStore} from 'redux';
import thunk from 'redux-thunk';
import {productDetailsReducer, productDeleteReducer, productListReducer, productCreateReducer,  productUpdateReducer} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer , userListReducer, userDetailsReducer, userUpdateProfileReducer, userRegisterReducer} from './reducers/userReducers';
import { orderCreateReducer, orderDeliverReducer, orderDeleteReducer, orderDetailsReducer, orderPayReducer,  orderMineListReducer,orderListReducer,} from './reducers/orderReducers';

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

    //Products
    productList:productListReducer,
    productDetails:productDetailsReducer,
    productCreate: productCreateReducer, 
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    //Cart
    cart: cartReducer, 
    //User
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userList: userListReducer,

    //Orders
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderList: orderListReducer,
    orderMineList: orderMineListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    
    

})
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnchancer(applyMiddleware(thunk)) );

export default store;