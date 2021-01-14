import React, { useState } from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

const Post = ({ post }) => {
    const [comment, setComment] = useState('')

    const commentHandler = (e) => {
        e.preventDefault()
        console.log(comment, post._id)
    }


    return (
        <div className="post" >
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt={post.user.username}
                    src="">
                </Avatar>
                <h3>{post.user.username}</h3>
            </div>

            {/*Image*/}
            <img
                className="post__image"
                src={post.imageUrl}
                alt={post.username}></img>

            {/*Username + Caption*/}
            {post.caption &&
                <h4 className="post__text"><strong>{post.user.username}</strong>{' '}{post.caption}</h4>}


            <input type="text" placeholder="Comment" onChange={(e) => setComment(e.target.value)}></input>
            <h1>{post.comment}</h1>
            <button onClick={commentHandler}>submit</button>
        </div>
    )
}

export default Post
