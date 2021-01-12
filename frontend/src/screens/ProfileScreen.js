import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPosts } from '../actions/PostActions'

const ProfileScreen = () => {
    const dispatch = useDispatch()

    const userPosts = useSelector(state => state.userPosts)
    const { posts } = userPosts
    console.log(posts)

    useEffect(() => {
        dispatch(getUserPosts())
    }, [dispatch])

    return (
        <div>
            {posts.map(post =>
                <div>
                    <h1> {post.user.name}</h1>
                    <p>{post.caption}</p>
                </div>
            )}
        </div >
    )
}

export default ProfileScreen
