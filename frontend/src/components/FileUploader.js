import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, getUserPosts } from '../actions/PostActions'
import { USER_CREATE_POST_RESET } from '../constants/PostConstants'
import { Button, Row, Form, Container } from 'react-bootstrap'
import Modal from 'react-modal'
import axios from 'axios'

const FileUploader = () => {
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const [caption, setCaption] = useState('')
    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)
    

    const userCreatePost = useSelector(state => state.userCreatePost)
    const { success } = userCreatePost

    useEffect(() => {
        if (success) {
            setModal(!modal)
            dispatch(getUserPosts())
            dispatch({
                type: USER_CREATE_POST_RESET
            })
        }

    }, [dispatch, success])

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            color: 'black',
        }
    }

    const modalHandler = () => {
        setModal(!modal)
    }

    const submitHandler=(e)=> {
        e.preventDefault()
        dispatch(createPost(caption, image))
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        
        try {
            const config = { 
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/upload', formData, config)
            setImage(data)
            setUploading(true)
        } catch(error) {
            console.error(error)
            setUploading(false)
        }
    }

    return (
        <Container fluid>
            <Row className="justify-content-center my-3">
                <Button className="text-center" variant="primary" onClick={modalHandler}>New Post</Button>
            </Row>
            <Modal
                ariaHideApp={false}
                style={customStyles}
                isOpen={modal}
                onRequestClose={modalHandler}
            >
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formPictureUpload">
                        <Form.Label>Picture Caption</Form.Label>
                        <Form.Control
                            type="caption"
                            placeholder="Enter a Caption"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId='picture'>
                        <Form.Label>Picture </Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Image url'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}>
                        </Form.Control>
                        <Form.File
                            id='image-file'
                            label='Choose file'
                            custom
                            onChange={uploadFileHandler}></Form.File>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </Modal>
        </Container>
    )
}

export default FileUploader
