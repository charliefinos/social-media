import React from 'react'
import './Profile.css'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Image, Row, Col } from 'react-bootstrap'
const Profile = ({ user }) => {

    return (
        <Row className="d-flex"  >
            <Col xs={5} >
                <Image
                    fluid
                    src={user.profileImg}
                ></Image>

            </Col>
            <Col xs={7} >
                <h3>{user.name}</h3>
                <br />
                <p>@{user.username}</p>
                <p><strong>Contact:</strong> {user.email}</p>
                {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}
                <br />
                <LinkContainer
                    to="/profile/edit"
                ><Button className="mx-2" variant="dark">Edit</Button></LinkContainer>
            </Col>
        </Row>
    )
}

export default Profile
