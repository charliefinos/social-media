import React, { useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, deletePostComment, postPostComment } from '../actions/PostActions'
import { BiCommentDetail } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { TiDeleteOutline } from 'react-icons/ti'
import './Post.css'
import 'fontsource-roboto'

import Avatar from '@material-ui/core/Avatar'

const Post = ({ post }) => {

    const dispatch = useDispatch()

    const [comment, setComment] = useState('')

    const userPost = useSelector(state => state.userPost)
    const { loading: loadingPost } = userPost


    const userPostComment = useSelector(state => state.userPostComment)
    const { success } = userPostComment

    const commentHandler = (e) => {
        e.preventDefault()
        dispatch(postPostComment(post._id, { comment }))
    }

    const deleteComment = (a, b) => {
        if (window.confirm('Do you want to delete this comment?')) {
            dispatch(deletePostComment(a, b))
        }
    }

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={e => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {<BsThreeDotsVertical size="20px" />}
            {children}
        </a>
    ));

    const deletePostHandler = (a) => {
        if (window.confirm('Do you want to delete this comment?')) {
            dispatch(deletePost(a))
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

                <Dropdown className='post__header__right' >
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">

                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => deletePostHandler(post._id)} eventKey="1">Delete Post</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Report</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            {/*Image*/}
            <img
                className="post__image"
                src={post.image}
            >
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
                        <a href='#' onClick={(() => {
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
