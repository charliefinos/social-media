import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './ProfileFollow.scss'

const ProfileFollow = ({ user }) => {

    const history = useHistory()

    const goToProfile = () => {
        history.push(`/${user.username}`)
    }

    return (
        <div className='profile__follow'>
            <div className='profile__image' >
                <img alt={user.username} src={user.profileImg}></img>
            </div>

            <div className="profile__link">
                <Link className='link' to={`/${user.username}`}><p>@{user.username}</p></Link>
            </div>

            <div className='profile__button' >
                <Button onClick={goToProfile} variant='primary'>Go To Profile</Button>
            </div>

            <br />
        </div>
    )
}

export default ProfileFollow
