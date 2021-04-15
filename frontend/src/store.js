import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    userLoginReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userRegisterReducer,
    userSearchProfileReducer,
    usernameProfileReducer,
    followUserReducer
} from './reducers/UserReducers'
import {
    userCreatePostReducer,
    userDeletePostCommentReducer,
    userDeletePostReducer,
    userPostCommentReducer,
    userPostReducer,
    userPostsReducer
} from './reducers/PostReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userRegister: userRegisterReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userPost: userPostReducer,
    userPosts: userPostsReducer,
    userPostComment: userPostCommentReducer,
    userDeletePost: userDeletePostReducer,
    userDeletePostComment: userDeletePostCommentReducer,
    userCreatePost: userCreatePostReducer,
    userSearchProfile: userSearchProfileReducer,
    usernameProfile: usernameProfileReducer,
    followUser: followUserReducer,
})

// Getting data from localStorage for initialState
// const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

// const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

// How the state is going to start
const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store

