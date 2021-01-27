import React, { useState } from 'react'
import './FileUploader.css'

const FileUploader = () => {
    const [modal, setModal] = useState(false)

    const modalHandler = () => {
        setModal(!modal)
    }

    return (
        <div className='file-uploader'>
            <button onClick={modalHandler}>New Post</button>
            {modal ? <h3>modal</h3> : null}
        </div>
    )
}

export default FileUploader
