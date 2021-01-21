import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postPostComment, getUserPosts } from '../actions/PostActions'
import './Post.css'

import Avatar from '@material-ui/core/Avatar'

const Post = ({ id, caption, username, imageUrl, post }) => {

    const dispatch = useDispatch()

    const [comment, setComment] = useState('')

    const userPosts = useSelector(state => state.userPosts)
    const { posts } = userPosts

    const userPostComment = useSelector(state => state.userPostComment)
    const { loading, success, error } = userPostComment

    const commentHandler = (e) => {
        e.preventDefault()
        dispatch(postPostComment(id, { comment }))
        console.log(id)
        setComment('')
    }

    useEffect(() => {

    }, [post])

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
            <div className="post__text">
                {post.comments.map(comment => (
                    <h4 key={comment._id}>
                        <strong>{comment.username}</strong>{' '}{comment.comment}
                    </h4>
                ))}
            </div>
            <form onSubmit={commentHandler}>
                <input type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)}></input>

                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Post
