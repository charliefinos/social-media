import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { Button, NavDropdown } from 'react-bootstrap'

import './Header.css'

const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [toggle, setToggle] = useState(false)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const loginHandler = () => {
        history.push('/login')
    }
    const logoutHandler = () => {
        dispatch(logout())
        history.push('/login')
    }
    const toggleHandler = () => {
        setToggle(!toggle)
    }


    return (
        <div className="header">
            <Link to='/'>
                <img
                    className="app__headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""
                />
            </Link >
            {userInfo ? (
                <div className="header__right">
                    <NavDropdown title={userInfo.name}>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </div>
            ) : (
                    <div className="header__right">
                        <LinkContainer to='/signup'><Button variant="primary"  >Signup</Button></LinkContainer>
                    </div>
                )
            }
        </div>
    )
}

export default Header
