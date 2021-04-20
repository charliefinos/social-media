import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Profile.css'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Image, Row, Col } from 'react-bootstrap'
import { followUserById } from '../actions/UserActions'


const Profile = ({ user, loading, success, userInfo }) => {

    const dispatch = useDispatch()

    const [myProfile, setMyProfile] = useState(false)
    const [following, setFollowing] = useState(false)

    const followHandler = () => {
        dispatch(followUserById(user._id))
    }

    const unfollowHandler = () => {
        console.log('asd')
    }

    useEffect(() => {
        if (userInfo._id === user._id) {
            setMyProfile(true)
            console.log(myProfile)
        } else {
            setMyProfile(false)
            console.log(myProfile)
        }

        const exist = user.followers.find((x) => {
            if (x.user === userInfo._id) {
                return true
            }
        }
        )

        if (exist) {
            setFollowing(true)
        } else {
            setFollowing(false)
        }

    })

    return (
        <Row className="mb-3  w-75 d-inline-flex border" >
            <Col className="w-25" md={4} xs={4} >
                <Image
                    className="my-5 rounded"
                    fluid
                    src={user.profileImg}
                ></Image>

            </Col>
            <Col className="w-50 py-4" md={5} xs={5} >
                <h3 className="mb-0">{user.name}</h3>
                <p className="text-muted">@{user.username}</p>

                <p className="mb-1"><strong>Followers:</strong> {user.followers.length}</p>
                <p className="mb-1"><strong>Contact:</strong> {user.email}</p>
                {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}

            </Col>
            <Col className="w-25" md={3} xs={3}>
                {myProfile ? (
                    <LinkContainer
                        className="mt-5"
                        to="/profile/edit"
                    ><Button variant="danger">Edit</Button></LinkContainer>
                ) : (
                    following ? (
                        <Button>Unfollow</Button>
                    ) : (
                        <Button>Follow</Button>
                    )
                )}





            </Col>
        </Row>
    )
}

export default Profile
