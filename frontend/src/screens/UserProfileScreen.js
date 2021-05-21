import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfilePostsByUsername } from '../actions/PostActions'
import { getProfileDetailsByUsername, followUserById, unfollowUserById } from '../actions/UserActions'
import Profile from '../components/Profile'
import Post from '../components/Post'
import Loader from '../components/Loader'
import Message from '../components/Message'

const UserProfileScreen = ({ match }) => {
    const dispatch = useDispatch()
    const username = match.params.username

    const usernameProfile = useSelector(state => state.usernameProfile)
    const { success, loading, user } = usernameProfile

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userProfilePosts = useSelector(state => state.userProfilePosts)
    const { posts, success: successPosts } = userProfilePosts

    const followUser = useSelector(state => state.followUser)
    const { success: followSuccess } = followUser

    const unfollowUser = useSelector(state => state.unfollowUser)
    const { success: unfollowSuccess } = unfollowUser

    const followHandler = () => {
        dispatch(followUserById(user._id))
    }

    const unfollowHandler = () => {
        dispatch(unfollowUserById(user._id))
    }

    useEffect(() => {
        dispatch(getProfileDetailsByUsername(username))
        dispatch(getUserProfilePostsByUsername(username))
    }, [dispatch, followSuccess, unfollowSuccess, username])

    return (
        <div className="app__posts">
            {loading && <Loader />}
            {success && (user === "" ? <h1>The user does not exists!</h1> : <Profile
                className="profile"
                user={user}
                loading={loading}
                success={success}
                userInfo={userInfo}
                followHandler={followHandler}
                unfollowHandler={unfollowHandler} />)}
            {successPosts && (
                <div className="app__posts">
                    {posts.length === 0 && <Message variant="primary">Nothing to see here</Message>}
                    {posts.map((post) => (
                        <Post
                            userInfo={userInfo}
                            post={post}
                            match={match} />
                    ))}
                </div>
            )}

        </div>
    )
}

export default UserProfileScreen
