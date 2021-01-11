import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPosts } from '../actions/PostActions'

const ProfileScreen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserPosts())
    }, [dispatch])

    return (
        <div className="profile">
            <h1>Profile</h1>
            <div className="profile__photo">
                <img></img>
            </div>
            <div className="profile__info">
            </div>
        </div>
    )
}

export default ProfileScreen
