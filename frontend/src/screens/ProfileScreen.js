import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPosts } from '../actions/PostActions'
import { getUserDetails } from '../actions/UserActions'
import Post from '../components/Post'
import Profile from '../components/Profile'


const ProfileScreen = () => {
    const dispatch = useDispatch()

    const userPosts = useSelector(state => state.userPosts)
    const { posts } = userPosts

    const userDetails = useSelector(state => state.userDetails)
    const { user } = userDetails

    useEffect(() => {
        dispatch(getUserPosts())
        dispatch(getUserDetails('profile'))
    }, [dispatch])

    return (
        <div className='app__posts'>
            <Profile user={user} />
            {posts.length === 0 ? (
                <h1>No post Founded!</h1>
            )
                :
                (
                    <>
                        {posts.map((post) =>
                            <div key={post._id}>
                                <Post
                                    post={post}
                                />
                            </div>
                        )}
                    </>
                )
            }
        </div >
    )
}

export default ProfileScreen
