import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/UserActions'
import { Button, NavDropdown } from 'react-bootstrap'

import './Header.css'

const Header = ({ match }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [toggle, setToggle] = useState(false)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
        history.push('/login')
    }
    const toggleHandler = () => {
        setToggle(!toggle)
    }


    return (
        <div className="header">
            <div className="header__left">
                <a href="/">
                    <img
                        className="header__img"
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt=""
                    />
                </a>
            </div>
            {userInfo ? (
                <div className="header__right">
                    <NavDropdown title={userInfo.name}>
                        <NavDropdown.Item >Profile</NavDropdown.Item>
                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </div>
            ) : (
                    <div className="header__right">
                        <a type="button" to='/signup'> Signup</a>
                        <LinkContainer to='/login'><Button variant="primary"  >Login</Button></LinkContainer>
                    </div>

                )
            }
        </div>
    )
}

export default Header
