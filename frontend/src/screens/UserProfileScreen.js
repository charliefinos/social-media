import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileDetailsByUsername } from '../actions/UserActions'
import Profile from '../components/Profile'

const UserProfileScreen = ({ match }) => {
    const dispatch = useDispatch()
    const username = match.params.username

    const usernameProfile = useSelector(state => state.usernameProfile)
    const { success, loading, user } = usernameProfile

    useEffect(() => {
        dispatch(getProfileDetailsByUsername(username))
    }, [dispatch])

    return (
        <div>
            {loading && <h1>Loading</h1>}
            {success && (user === "" ? <h1>The user does not exists!</h1> : <Profile user={user} />)}

        </div>
    )
}

export default UserProfileScreen
