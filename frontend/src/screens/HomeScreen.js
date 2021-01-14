import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUserPosts } from '../actions/postActions'
import Post from '../components/Post'

const HomeScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const userPosts = useSelector(state => state.userPosts)
    const { posts } = userPosts

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo === null) {
            history.push('/login')
        }
        dispatch(getUserPosts())
    }, [history, userInfo])

    return (
        <>
            {posts.map((post) => (
                <div key={post._id}>
                    <Post
                        post={post} />
                </div>
            ))}
        </>
    )
}

export default HomeScreen
