import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUserPosts } from '../actions/PostActions'
import Post from '../components/Post'
import FileUploader from '../components/FileUploader'

const HomeScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const userPosts = useSelector(state => state.userPosts)
    const { posts } = userPosts

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo === null) {
            history.push('/login')
        }
        dispatch(getUserPosts())
    }, [history, userInfo, dispatch])

    return (
        <div>
            <FileUploader />
            {posts.length === 0 ? (
                <h2>No post Founded!</h2>
            ) : (<div className='app__posts'>
                {posts.map((post) => (
                    <div key={post._id}>
                        <Post
                            post={post}
                        />
                    </div>
                ))}
            </div>)}

        </div>
    )
}

export default HomeScreen
