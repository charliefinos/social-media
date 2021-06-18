import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'

const PostHeader = ({ post, CustomToggle, myProfile, deletePostHandler }) => {
  return (
    <>
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
          {myProfile && <Dropdown.Item onClick={() => deletePostHandler(post._id)} eventKey="1">Delete Post</Dropdown.Item>}

          <Dropdown.Item eventKey="2">Report</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default PostHeader
