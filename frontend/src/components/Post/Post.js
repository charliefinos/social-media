import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, deletePostComment, postPostComment } from '../../actions/PostActions'
import { BiCommentDetail } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import PostHeader from './PostHeader'
import PostCaption from './PostCaption'
import PostComment from './PostComment'
import './Post.scss'
import 'fontsource-roboto'

const Post = ({ post, match }) => {

    const url = match.url
    const dispatch = useDispatch()

    const [myProfile, setMyProfile] = useState(false)
    const [delPost, setDelPost] = useState(false)
    const [comment, setComment] = useState('')

    const userPost = useSelector(state => state.userPost)
    const { loading: loadingPost } = userPost

    const userPostComment = useSelector(state => state.userPostComment)
    const { success } = userPostComment

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

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
        if (userInfo._id === post.user._id) {
            setMyProfile(true)
            console.log(myProfile)
        } else {
            setMyProfile(false)
            console.log(myProfile)
        }

    }, [success, url, userInfo._id, post.user._id, myProfile])

    return (
        <div className="post" >
            <div className="post__header">
                <PostHeader
                    post={post}
                    CustomToggle={CustomToggle}
                    myProfile={myProfile}
                    deletePostHandler={deletePostHandler}
                />
            </div>

            {/*Image*/}
            <img
                alt={post.image}
                className="post__image"
                src={post.image}
            >
            </img>

            {/*Username + Caption*/}
            {post.caption &&
                <PostCaption post={post} />
            }

            {/*Comments*/}
            {post.comments.map(x => (
                <PostComment
                    x={x}
                    post={post}
                    delPost={delPost}
                    deleteComment={deleteComment}
                />
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

