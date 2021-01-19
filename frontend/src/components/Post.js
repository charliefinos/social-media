import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postPostComment } from '../actions/PostActions'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

const Post = ({ post }) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState('')

    const commentHandler = (e) => {
        e.preventDefault()
        dispatch(postPostComment(post._id, { comment }))
        setComment('')
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


            <input type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)}></input>
            <h1>{post.comment}</h1>
            <button onClick={commentHandler}>submit</button>
        </div>
    )
}

export default Post
