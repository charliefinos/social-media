import React from 'react'
import './Profile.css'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Image } from 'react-bootstrap'
const Profile = ({ user }) => {

    return (
        <div className="profile" fluid>
            <div className="profile__photo">
                <Image
                    fluid
                    src={user.profileImg}
                ></Image>

            </div>
            <div className="profile__data">
                <h3>{user.name}</h3>
                <br />
                <p>@{user.username}</p>
                <p><strong>Contact:</strong> {user.email}</p>
                {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}
                <br />
                <LinkContainer
                    to="/profile/edit"
                ><Button variant="dark">Edit</Button></LinkContainer>
            </div>
        </div>
    )
}

export default Profile
