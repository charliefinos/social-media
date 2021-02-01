import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './FileUploader.css'
import Modal from 'react-modal'
import { createPost, getUserPosts } from '../actions/PostActions'
import { USER_CREATE_POST_RESET } from '../constants/PostConstants'

const FileUploader = () => {
    const [modal, setModal] = useState(false)
    const [caption, setCaption] = useState('')

    const dispatch = useDispatch()

    const userCreatePost = useSelector(state => state.userCreatePost)
    const { success } = userCreatePost

    useEffect(() => {
        if (success) {
            modalHandler()
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

    const uploadFileHandler = (e) => {
        e.preventDefault()
        dispatch(createPost({ caption }))
    }

    return (
        <div className='file-uploader'>
            <button onClick={modalHandler}>New Post</button>
            <Modal
                ariaHideApp={false}
                style={customStyles}
                isOpen={modal}
                onRequestClose={modalHandler}
            >
                <div className='file-uploader__form'>
                    <form onSubmit={uploadFileHandler}>
                        <label name='text'>Caption</label>
                        <input type='text' placeholder='Put a caption here...' value={caption} onChange={e => setCaption(e.target.value)}></input>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default FileUploader
