import {
    USER_CREATE_POST_FAIL,
    USER_CREATE_POST_REQUEST,
    USER_CREATE_POST_SUCCESS,
    USER_CREATE_POST_RESET,
    USER_POSTS_FAIL,
    USER_POSTS_REQUEST,
    USER_POSTS_SUCCESS,
    USER_POST_COMMENT_FAIL,
    USER_POST_COMMENT_REQUEST,
    USER_POST_COMMENT_SUCCESS,
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

export const userPostCommentReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_POST_COMMENT_REQUEST:
            return { loading: true }
        case USER_POST_COMMENT_SUCCESS:
            return { loading: false, success: true }
        case USER_POST_COMMENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}

export const userCreatePostReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_CREATE_POST_REQUEST:
            return { loading: true }
        case USER_CREATE_POST_SUCCESS:
            return { loading: false, success: true, post: action.payload }
        case USER_CREATE_POST_FAIL:
            return { loading: false, error: action.payload }
        case USER_CREATE_POST_RESET:
            return {}
        default:
            return state
    }
}