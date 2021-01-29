import React, { useState } from 'react'
import './FileUploader.css'
import Modal from 'react-modal'

const FileUploader = () => {
    const [modal, setModal] = useState(false)
    const [caption, setCaption] = useState('')

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    }

    const modalHandler = () => {
        setModal(!modal)
    }

    const closeModal = () => {
        setModal(false)
    }

    const uploadFileHandler = (e) => {
        e.preventDefault()
        console.log(caption)
    }

    return (
        <div className='file-uploader'>
            <button onClick={modalHandler}>New Post</button>
            <Modal
                ariaHideApp={false}
                style={customStyles}
                isOpen={modal}>
                <div className='file-uploader__close__button'>
                    <button onClick={closeModal}>x</button>
                </div>
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
