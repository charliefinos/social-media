import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

const Post = () => {
    return (
        <div className="post" >
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="charliefinos"
                    src="">
                </Avatar>
                <h3>username</h3>
            </div>

            {/*Image*/}
            <img
                className="post__image"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png"></img>

            {/*Username + Caption*/}
            <h4 className="post__text"><strong>charliefinos</strong> Nice day ha?</h4>
        </div>
    )
}

export default Post
