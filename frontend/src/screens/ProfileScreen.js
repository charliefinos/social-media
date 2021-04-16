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
    const { user, loading, success } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch(getUserDetails('profile'))
    }, [dispatch])

    return (
        <div className='app__posts'>
            {success && <Profile userInfo={userInfo} user={user} />}
        </div >
    )
}

export default ProfileScreen
