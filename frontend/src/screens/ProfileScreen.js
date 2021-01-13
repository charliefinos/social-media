import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPosts } from '../actions/PostActions'
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
                <div>
                    <Post
                        username={post.user.username}
                        caption={post.caption}
                        imageUrl={post.imageUrl}
                    />
                </div>
            )}
        </div >
    )
}

export default ProfileScreen
