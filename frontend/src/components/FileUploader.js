import React, { useState } from 'react'
import './FileUploader.css'
import Modal from 'react-modal'

const FileUploader = () => {
    const [modal, setModal] = useState(false)

    const modalHandler = () => {
        setModal(!modal)
    }

    const closeModal = () => {
        setModal(false)
    }
    return (
        <div className='file-uploader'>
            <button onClick={modalHandler}>New Post</button>
            <Modal isOpen={modal}>
                <div className='file-uploader__close__button'>
                    <button onClick={closeModal}>x</button>
                </div>
                <h2>Modal</h2>
            </Modal>
        </div>
    )
}

export default FileUploader
