import React from 'react'
import { Link } from 'react-router-dom'

const PostCaption = ({ post }) => {
  return (
    <h5 className="post__text">
      <Link to={`/${post.user.username}`} className="link">
        <strong>{post.user.username}</strong>
      </Link>{' '}{post.caption}
    </h5>
  )
}

export default PostCaption
