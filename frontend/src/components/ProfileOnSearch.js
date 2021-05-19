import React from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const ProfileOnSearch = ({ user }) => {

    const history = useHistory()

    const goToProfile = () => {
        history.push(`/${user.username}`)
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
                <Button onClick={goToProfile} variant='primary'>Go To Profile</Button>
            </Col>

            <br />
        </Row>
    )
}

export default ProfileOnSearch
