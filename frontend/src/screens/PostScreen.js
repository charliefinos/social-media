import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../actions/PostActions'
import Post from '../components/Post'

const PostScreen = ({ match }) => {
    const dispatch = useDispatch()

    const userPost = useSelector(state => state.userPost)
    const { post, loading } = userPost

    useEffect(() => {
        dispatch(getPost(match.params.id))
        console.log(post)
    }, [match])

    return (
        <>
            <div>
                <h1>{post.caption}</h1>
                <h1>{post._id}</h1>
                <h1>{post.user.username}</h1>

            </div>
        </>
    )
}

export default PostScreen
