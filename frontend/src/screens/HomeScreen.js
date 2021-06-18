import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUserPosts } from '../actions/PostActions'
import Post from '../components/Post/Post'
import Loader from '../components/Loader'
import FileUploader from '../components/FileUploader'
import Message from '../components/Message'

const HomeScreen = ({ match }) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const userPosts = useSelector(state => state.userPosts)
    const { posts, loading } = userPosts

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userDeletePost = useSelector(state => state.userDeletePost)
    const { success } = userDeletePost

    useEffect(() => {
        if (success) {
            dispatch(getUserPosts(userInfo.username))
        }
        if (userInfo === null) {
            history.push('/account/login')
        } else {
            dispatch(getUserPosts(userInfo.username))
        }


    }, [history, userInfo, dispatch, success])

    return (
        <div className="app__posts">
            <FileUploader userInfo={userInfo} />
            {loading && <Loader />}

            {posts.length === 0 ? (
                <div>
                    <Message variant="primary">Nothing to see here. Search for your friends in the search bar and see their posts.
                    </Message>
                </div>


            ) : (<div className='app__posts'>
                {posts.map((post) => (
                    <div key={post._id}>
                        <Post
                            post={post}
                            match={match}
                        />
                    </div>
                ))}
            </div>)}

        </div>
    )
}

export default HomeScreen
