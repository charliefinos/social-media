import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import ProfileFollow from '../components/ProfileFollow'
import { getProfileDetailsByUsername } from '../actions/UserActions'

const FollowingScreen = ({ match }) => {

    const username = match.params.username

    const dispatch = useDispatch()

    const usernameProfile = useSelector(state => state.usernameProfile)
    const { user, loading, success } = usernameProfile

    useEffect(() => {
        dispatch(getProfileDetailsByUsername(username))
    }, [username, dispatch])

    return (
        <div className="app__posts">
            <h2>Followers:</h2>
            {loading && <Loader />}
            {success && (user.followers.length === 0 ? (
                <h1>Nothing to see here.</h1>
            ) :
                (user.followers.map((user) => (
                    <div key={user._id}>

                        <br />
                        <ProfileFollow user={user} />
                    </div>
                ))))}

        </div >
    )
}

export default FollowingScreen
