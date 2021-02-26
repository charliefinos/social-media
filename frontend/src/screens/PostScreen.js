import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../actions/PostActions'
import Post from '../components/Post'

const PostScreen = ({ match }) => {
    const dispatch = useDispatch()

    const userPost = useSelector(state => state.userPost)
    const { post } = userPost

    const userPostComment = useSelector(state => state.userPostComment)
    const { success } = userPostComment

    const userDeletePostComment = useSelector(state => state.userDeletePostComment)
    const { success: deleteSuccess } = userDeletePostComment


    useEffect(() => {
        if (success || deleteSuccess) {
            dispatch(getPost(match.params.id))
        }
        dispatch(getPost(match.params.id))
    }, [match, success, deleteSuccess, dispatch])

    return (
        <>
            <div>
                <Post post={post} />
            </div>
        </>
    )
}

export default PostScreen
