import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUserPosts } from '../actions/PostActions'
import Post from '../components/Post'
import FileUploader from '../components/FileUploader'

const HomeScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const userPosts = useSelector(state => state.userPosts)
    const { posts } = userPosts

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userPostComment = useSelector(state => state.userPostComment)
    const { loading, success, error } = userPostComment

    useEffect(() => {
        if (userInfo === null) {
            history.push('/login')
        }
        dispatch(getUserPosts())
    }, [history, userInfo, dispatch])

    return (
        <>
            <FileUploader />
            <div className='app__posts'>
                {posts.map((post) => (
                    <div key={post._id}>
                        <Post
                            post={post}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomeScreen
