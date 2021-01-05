import React from 'react'
import './Post.css'

const Post = () => {
    return (
        <div className="post" >
            {/*UserName*/}
            <h3>username</h3>

            {/*Image*/}
            <img
                className="post__image"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png"></img>

            {/*Username + Caption*/}
            <h4>Username: captio</h4>
        </div>
    )
}

export default Post
