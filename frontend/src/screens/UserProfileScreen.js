import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileDetailsByUsername } from '../actions/UserActions'
import Profile from '../components/Profile'

const UserProfileScreen = ({ match }) => {
    const dispatch = useDispatch()
    const username = match.params.username

    const usernameProfile = useSelector(state => state.usernameProfile)
    const { success, loading, user } = usernameProfile

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch(getProfileDetailsByUsername(username))
    }, [dispatch, username])

    return (
        <div className="app__posts">
            {loading && <h1>Loading</h1>}
            {success && (user === "" ? <h1>The user does not exists!</h1> : <Profile user={user} loading={loading} success={success} userInfo={userInfo} />)}

        </div>
    )
}

export default UserProfileScreen
