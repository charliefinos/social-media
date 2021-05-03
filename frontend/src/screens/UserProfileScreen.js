import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfilePostsByUsername } from '../actions/PostActions'
import { getProfileDetailsByUsername } from '../actions/UserActions'
import Profile from '../components/Profile'
import Post from '../components/Post'

const UserProfileScreen = ({ match }) => {
    const dispatch = useDispatch()
    const username = match.params.username

    const usernameProfile = useSelector(state => state.usernameProfile)
    const { success, loading, user } = usernameProfile

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userProfilePosts = useSelector(state => state.userProfilePosts)
    const { posts, loading: loadingPosts, success: successPosts } = userProfilePosts


    useEffect(() => {
        dispatch(getProfileDetailsByUsername(username))
        dispatch(getUserProfilePostsByUsername(username))
    }, [dispatch])

    return (
        <div className="app__posts">
            {loading && <h1>Loading</h1>}
            {success && (user === "" ? <h1>The user does not exists!</h1> : <Profile user={user} loading={loading} success={success} userInfo={userInfo} />)}
            {successPosts && (
                <div className="app__posts">
                    {posts.map((post) => (
                        <Post post={post} match={match} />
                    ))}
                </div>
            )}

        </div>
    )
}

export default UserProfileScreen
