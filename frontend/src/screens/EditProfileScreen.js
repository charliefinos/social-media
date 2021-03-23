import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, Button, Col, Row, Container, Image } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { getUserDetails, updateUserProfile } from '../actions/UserActions'



const EditProfileScreen = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [profileImg, setProfileImg] = useState('')
    const [bio, setBio] = useState('')

    const userDetails = useSelector(state => state.userDetails)
    const { user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setUsername(user.username)
                setEmail(user.email)
                setBio(user.bio)
            }

        }
    }, [dispatch, history, userInfo, user])

    const submitHandler = () => {
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({
                id: user._id,
                name,
                username,
                email,
                password,
                profileImg,
                bio
            }))
        }
    }

    return (
        <Container>
            <Row className="d-flex justify-content-between">
                <Col md={4} sm={4} xs={6}>
                    <h3 className="mt-2">Profile Image</h3>
                    <Image className='py-1' src={user.profileImg} thumbnail fluid />
                </Col>
                <Col md={8} sm={8}>
                    <FormContainer>
                        <h1>Profile</h1>
                        {success && <h1>{success}</h1>}
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='username'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Profile Picture Url'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter New Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='confirmpassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Confirm Password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='profilephoto'>
                                <Form.Label>Profile Photo Url</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Profile Picture Url'
                                    value={profileImg}
                                    onChange={(e) => setProfileImg(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='bio'>
                                <Form.Label>Bio</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Something about you'
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Button type='submit' variant='primary'>
                                Update
                            </Button>
                        </Form>

                    </FormContainer>
                </Col>
            </Row>
        </Container>
    )
}

export default EditProfileScreen
