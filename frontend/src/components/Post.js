import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePostComment, postPostComment, getPost } from '../actions/PostActions'
import { BiCommentDetail } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { TiDeleteOutline } from 'react-icons/ti'
import './Post.css'


import Avatar from '@material-ui/core/Avatar'

const Post = ({ post, match }) => {

    const dispatch = useDispatch()

    const [comment, setComment] = useState('')

    const [postId, setPostId] = useState('')
    const [commentId, setCommentId] = useState('')

    const userPost = useSelector(state => state.userPost)
    const { loading: loadingPost } = userPost

    const userPosts = useSelector(state => state.userPosts)
    const { posts } = userPosts

    const userPostComment = useSelector(state => state.userPostComment)
    const { loading, success, error } = userPostComment

    const commentHandler = (e) => {
        e.preventDefault()
        dispatch(postPostComment(post._id, { comment }))
    }

    const deleteComment = (a, b) => {
        if (window.confirm('Do you want to delete this comment?')) {
            dispatch(deletePostComment(a, b))
        }
    }

    useEffect(() => {
        if (success) {
            setComment('')
        }
    }, [success])

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
                alt={post.user.username}>
            </img>

            {/*Username + Caption*/}
            {post.caption &&
                <h4 className="post__text"><strong>{post.user.username}</strong>{' '}{post.caption}</h4>}

            {post.comments.map(x => (
                <div className="post__text__comment" key={x._id}>
                    <div className="post__text__comment__left">
                        <strong>{x.username}</strong>{' '}{x.comment}
                    </div>
                    <div className="post__text__comment__right">
                        <a onClick={(() => {
                            deleteComment(post._id, x._id)
                        })}><TiDeleteOutline color="light-gray" /></a>
                    </div>
                </div>
            ))}

            {loadingPost === false ? (
                <form onSubmit={commentHandler}>
                    <input type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)}></input>

                    <button type="submit">submit</button>
                </form>
            ) : (<a href={`/post/${post._id}`}><BiCommentDetail size="50px" color="black" /></a>)}

        </div >
    )
}

export default Post
