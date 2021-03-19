import React from 'react'
import './Profile.css'
const Profile = ({ userInfo }) => {

    return (
        <div className="profile">
            <div className="profile__photo">
                <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"></img>
            </div>
            <div className="profile__data">
                <h2>{userInfo.name}</h2>
                <br />
                <p>@{userInfo.username}</p>
                <p><strong>Contact:</strong> {userInfo.email}</p>
                <p><strong>Bio:</strong> React Developer</p>
            </div>
        </div>
    )
}

export default Profile
