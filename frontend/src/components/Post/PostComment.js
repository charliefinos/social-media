import React from 'react'
import { Link } from 'react-router-dom'
import { TiDeleteOutline } from 'react-icons/ti'

const PostComment = ({ x, post, delPost, deleteComment }) => {
  return (
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
  )
}

export default PostComment
