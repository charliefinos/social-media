import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, getUserPosts } from '../actions/PostActions'
import { USER_CREATE_POST_RESET } from '../constants/PostConstants'
import Modal from 'react-modal'
import axios from 'axios'
import '../components/FileUploader.scss'
import Loader from '../components/Loader'

const FileUploader = ({ userInfo }) => {
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
            dispatch(getUserPosts(userInfo.username))
            dispatch({
                type: USER_CREATE_POST_RESET
            })
        }

    }, [dispatch, success, modal, userInfo.username])

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            height: '40%',
            color: 'black',
            display: 'flex',
        }
    }

    const modalHandler = () => {
        setModal(!modal)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createPost(caption, image))
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/upload', formData, config)
            setImage(data.imageUrl)

            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    return (
        <div className="file__uploader">

            <div className="file__uploader__button">
                <button variant="primary" onClick={modalHandler}>New Post</button>
            </div>

            <Modal
                ariaHideApp={false}
                style={customStyles}
                isOpen={modal}
                onRequestClose={modalHandler}
            >
                <form className="form" onSubmit={submitHandler} >
                    <div className="form__file">
                        <label>Picture Caption</label>
                        <input
                            type="caption"
                            placeholder="Enter a Caption"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)} />

                        <label>Picture </label>
                        <input
                            type='text'
                            placeholder='Enter Image url'
                            value={image}
                            onChange={(e) => setImage(e.target.value)} />
                        <label className="input__file__label">
                            Upload Image
                            <input
                                type="file"
                                id='image-file'
                                label='Choose file'
                                custom
                                onChange={uploadFileHandler} />
                        </label>
                        {uploading && <Loader />}
                        <div className="submit__file">
                            <button type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>

        </div >
    )
}

export default FileUploader
