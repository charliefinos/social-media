import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchUsers } from '../actions/UserActions'
import ProfileOnSearch from '../components/ProfileOnSearch'
import Loader from '../components/Loader'
const SearchUsers = ({ match }) => {
    const dispatch = useDispatch()

    const keyword = match.params.keyword

    const userSearchProfile = useSelector(state => state.userSearchProfile)
    const { userSearch, loading, success } = userSearchProfile

    useEffect(() => {
        dispatch(searchUsers(keyword))
    }, [dispatch, keyword])



    return (
        <div className="app__posts">
            {loading && <Loader />}
            {success && (userSearch.length === 0 ? (
                <h1>No users found!</h1>
            ) :
                (userSearch.map((user) => (
                    <div key={user._id}>
                        <ProfileOnSearch user={user} />
                    </div>
                ))))}

        </div >
    )
}

export default SearchUsers
