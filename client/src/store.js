import {applyMiddleware , combineReducers, compose ,createStore} from 'redux';
import thunk from 'redux-thunk';
import {productDetailsReducer, productListReducer} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer , userRegisterReducer} from './reducers/userReducers';

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
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
    cart: cartReducer, 
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,

})
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnchancer(applyMiddleware(thunk)) );

export default store;