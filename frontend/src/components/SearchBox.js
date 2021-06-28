import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword.trim()}`)
        } else {
            history.push('/')
        }
    }

    return (
        <form onSubmit={submitHandler} >
            <input
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search a user'
            >
            </input>
            <button type="submit" variant='outline-success' className='p-2'>
                Search
            </button>
        </form>
    )
}

export default SearchBox
