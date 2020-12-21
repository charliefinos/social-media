import React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {


    return (
        <>
            <h1>Home Page</h1>
            <Link to='/login' className='btn btn-dark my-3'>Login</Link>
            <Link to='/signup' className='btn btn-dark my-3'>Signup</Link>
        </>
    )
}

export default HomeScreen
