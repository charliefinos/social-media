import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { followUserById } from '../actions/UserActions'

const ProfileOnSearch = ({ user }) => {

    const dispatch = useDispatch()

    const followUser = useSelector(state => state.followUser)
    const { loading, success } = followUser

    const followHandler = (id) => {
        dispatch(followUserById(id))
    }

    return (
        <Row className='my-2 py-1 border-bottom' key={user._id}>
            <Col className='mr-3' xs={4} md={3} lg={3}>
                <Image fluid roundedCircle src={user.profileImg}></Image>
            </Col>

            <Col xs={4} md={4} lg={4}>
                <p><strong>{user.name}</strong></p>
                <Link to={`/${user.username}`}><p>@{user.username}</p></Link>
                <p><strong>Email: </strong>{user.email}</p>
            </Col>

            <Col className='mt-4' xs={3} md={3} lg={3}>
                <Button onClick={() => followHandler(user._id)} variant='primary'>Follow</Button>
            </Col>

            <br />
        </Row>

    )
}

export default ProfileOnSearch
