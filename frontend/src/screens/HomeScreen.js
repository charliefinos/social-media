import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Post from '../components/Post'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo === null) {
            history.push('/login')
        }
    }, [history, userInfo])

    return (
        <>
            <h1>Home Page</h1>
            <Post />
            <Post />
            <Post />
        </>
    )
}

export default HomeScreen
