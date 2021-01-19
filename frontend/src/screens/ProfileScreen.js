import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPosts } from '../actions/postActions'
import Post from '../components/Post'

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
                <Post
                    key={post._id}
                    username={post.user.username}
                    caption={post.caption}
                    imageUrl={post.imageUrl}
                />
            )}
        </div >
    )
}

export default ProfileScreen
