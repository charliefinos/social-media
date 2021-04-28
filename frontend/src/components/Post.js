import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Form, Button, Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, deletePostComment, postPostComment } from '../actions/PostActions'
import { BiCommentDetail } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { TiDeleteOutline } from 'react-icons/ti'
import './Post.scss'
import 'fontsource-roboto'

import Avatar from '@material-ui/core/Avatar'



const Post = ({ post, match }) => {

    const url = match.url

    const [delPost, setDelPost] = useState(false)
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
        if (window.confirm('Do you want to delete this post?')) {
            dispatch(deletePost(a))
        }

    }

    useEffect(() => {
        if (success) {
            setComment('')
        }
        if (url === '/') {
            setDelPost(true)
        }

    }, [success])

    return (
        <div className="post" >
            <div className="post__header">
                <div className="post__header__left">
                    <Link className="link" to={`/${post.user.username}`}>
                        <Avatar
                            className="post__avatar"
                            alt={post.user.username}
                            src={post.user.profileImg}>
                        </Avatar>
                    </Link>
                    <Link className="link" to={`/${post.user.username}`}><h3>{post.user.username}</h3></Link>
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
                <h5 className="post__text"><Link
                    to={`/${post.user.username}`} className="link"><strong>{post.user.username}</strong></Link>{' '}{post.caption}</h5>}

            {/*Comments*/}
            {post.comments.map(x => (
                <div className="post__text__comment" key={x._id}>
                    <div className="post__comment">
                        <Link className="link" to={`/${x.username}`}><strong>{x.username}</strong></Link>{' '}{x.comment}
                    </div>
                    <div className="mr-2">
                        {!delPost && <Link onClick={(() => {
                            deleteComment(post._id, x._id)
                        })}><TiDeleteOutline color="light-gray" /></Link>}
                    </div>
                </div>
            ))}

            {loadingPost === false ? (
                <div className="form">
                    <form onSubmit={commentHandler} >
                        <div className="form__input">
                            <input
                                type="text"
                                placeholder="Comment"
                                value={comment} onChange={(e) => setComment(e.target.value)} />
                        </div>
                        <div className="form__button">
                            <button
                                type='submit'
                                variant='primary'>
                                Submit
                        </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="icon"><a className="link" href={`/post/${post._id}`}><BiCommentDetail size="30px" /> Add a comment</a>
                </div>
            )}

        </div >
    )
}

export default Post

