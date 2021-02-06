import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postPostComment, getUserPosts } from '../actions/PostActions'
import { BiCommentDetail } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import './Post.css'


import Avatar from '@material-ui/core/Avatar'

const Post = ({ post }) => {

    const dispatch = useDispatch()

    const [comment, setComment] = useState('')

    const userPosts = useSelector(state => state.userPosts)
    const { posts } = userPosts

    const userPostComment = useSelector(state => state.userPostComment)
    const { loading, success, error } = userPostComment

    const commentHandler = (e) => {
        e.preventDefault()
        dispatch(postPostComment(post._id, { comment }))
    }

    const clickHandler = () => {
        console.log('carlos')
    }

    useEffect(() => {
        if (success) {
            setComment('')
        }
    }, [success, post.comment])

    return (
        <div className="post" >
            <div className="post__header">
                <div className="post__header__left">
                    <Avatar
                        className="post__avatar"
                        alt={post.user.username}
                        src="">
                    </Avatar>
                    <h3>{post.user.username}</h3>
                </div>
                <div className="post__header__right">
                    <a><BsThreeDotsVertical size="20px" /></a>
                </div>
            </div>
            {/*Image*/}
            <img
                className="post__image"
                src={post.imageUrl}
                alt={post.user.username}></img>

            {/*Username + Caption*/}
            {post.caption &&
                <h4 className="post__text"><strong>{post.user.username}</strong>{' '}{post.caption}</h4>}
            <div className="post__text">
                {post.comments.map(comment => (
                    <h4 key={comment._id}>
                        <strong>{comment.username}</strong>{' '}{comment.comment}
                    </h4>
                ))}
            </div>
            <a href={`/${post._id}`}><BiCommentDetail size="50px" color="black" /></a>
            <form onSubmit={commentHandler}>
                <input type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)}></input>

                <button type="submit">submit</button>
            </form>
        </div >
    )
}

export default Post
