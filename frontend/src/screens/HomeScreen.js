import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Post from '../components/Post'

const HomeScreen = () => {
    const [posts, setPosts] = useState([
        {
            username: "charliefinos",
            caption: "sunny day",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png"
        },
        {
            username: "marcoantonio",
            caption: "que onda lorooo",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png"
        },
        {
            username: "kurtcobain",
            caption: "wsuuup dude",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png"
        }
    ])


    const history = useHistory()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo === null) {
            history.push('/login')
        }
    }, [history, userInfo])

    return (
        <>
            {posts.map((post) => (
                <>
                    <h1>Poste</h1>
                    <Post
                        username={post.username}
                        caption={post.caption}
                        imageUrl={post.imageUrl} />
                </>
            ))}
        </>
    )
}

export default HomeScreen
