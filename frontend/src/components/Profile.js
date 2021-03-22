import React from 'react'
import './Profile.css'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
const Profile = ({ userInfo }) => {

    return (
        <div className="profile">
            <div className="profile__photo">
                <img
                    src={userInfo.profileImg}
                ></img>

            </div>
            <div className="profile__data">
                <h2>{userInfo.name}</h2>
                <br />
                <p>@{userInfo.username}</p>
                <p><strong>Contact:</strong> {userInfo.email}</p>
                <p><strong>Bio:</strong> React Developer</p>
                <br />
                <LinkContainer
                    to="/profile/edit"
                ><Button variant="dark">Edit</Button></LinkContainer>
            </div>
        </div>
    )
}

export default Profile
