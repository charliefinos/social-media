import React, { useEffect, useState } from 'react'
import './Profile.scss'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Profile = ({ user, loading, success, userInfo, followHandler, unfollowHandler }) => {

    const [myProfile, setMyProfile] = useState(false)
    const [following, setFollowing] = useState(false)

    useEffect(() => {
        if (userInfo._id === user._id) {
            setMyProfile(true)
            console.log(myProfile)
        } else {
            setMyProfile(false)
            console.log(myProfile)
        }

        const exist = user.followers.find((x) => x.user === userInfo._id)

        if (exist) {
            setFollowing(true)
        } else {
            setFollowing(false)
        }

    }, [userInfo._id, user._id, user.followers, myProfile])

    return (
        <div className="profile" >
            <div className="profile__photo" >
                <img
                    alt={user.profileImg}
                    src={user.profileImg}
                ></img>

            </div>
            <div className="profile__info" >
                <h3 className="">{user.name}</h3>
                <Link href="#" to={`/${user.username}`} className="username">@{user.username}</Link>

                <p className=""><strong>Followers:</strong> {user.followers.length}</p>
                <p className=""><strong>Contact:</strong> {user.email}</p>
                {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}

            </div>
            <div className="profile__button">
                {myProfile ? (
                    <LinkContainer
                        className="button"
                        to="/account/edit"
                    ><Button variant="danger">Edit</Button></LinkContainer>
                ) : (
                    following ? (
                        <div>
                            <Button className="button" onClick={unfollowHandler}>Unfollow</Button>
                        </div>
                    ) : (
                        <div>
                            <Button className="button" onClick={followHandler}>Follow</Button>
                        </div>
                    )
                )}
            </div>
        </div >
    )
}

export default Profile
