import React, {useState} from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

const Post = ({ username, caption, imageUrl }) => {
    const [comment, setComment] = useState()


    return (
        <div className="post" >
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src="">
                </Avatar>
                <h3>{username}</h3>
            </div>

            {/*Image*/}
            <img
                className="post__image"
                src={imageUrl}
                alt={username}></img>

            {/*Username + Caption*/}
            {caption &&
                <h4 className="post__text"><strong>{username}</strong>{' '}{caption}</h4>}

            <input type="text" placeholder="Comment" onChange={(e)=> setComment(e.target.value)}></input>
        </div>
    )
}

export default Post
