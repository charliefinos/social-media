import axios from 'axios'
import { USER_POSTS_FAIL, USER_POSTS_REQUEST, USER_POSTS_SUCCESS, USER_POST_COMMENT_FAIL, USER_POST_COMMENT_REQUEST, USER_POST_COMMENT_SUCCESS } from '../constants/PostConstants'

export const getUserPosts = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_POSTS_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get('/api/posts/profile', config)

        dispatch({
            type: USER_POSTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_POSTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const postPostComment = (id, comment) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_POST_COMMENT_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        await axios.post(`/api/posts/${id}/comments`, comment, config)

        dispatch({
            type: USER_POST_COMMENT_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: USER_POST_COMMENT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}