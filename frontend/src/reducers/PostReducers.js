import {
    USER_POSTS_FAIL,
    USER_POSTS_REQUEST,
    USER_POSTS_SUCCESS,
} from '../constants/PostConstants'

export const userPostsReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case USER_POSTS_REQUEST:
            return { loading: true, posts: [] }
        case USER_POSTS_SUCCESS:
            return { loading: false, posts: action.payload }
        case USER_POSTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}