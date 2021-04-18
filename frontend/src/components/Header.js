import React from 'react'
import { Route } from 'react-router-dom'
import { useHistory, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/UserActions'
import { Button, Navbar, Form, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'

import './Header.css'

const Header = ({ match }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
        history.push('/account/login')
    }

    return (
        <Navbar className="d-flex justify-content-between py-3" bg="primary" variant="dark">
            <Navbar.Brand href="/">Social-Network</Navbar.Brand>

            {userInfo ? (
                <>
                    <Route render={({ history }) => <SearchBox history={history} />} />
                    <DropdownButton variant="dark" id="dropdown-basic-button" title={userInfo.name}>
                        <Dropdown.Item href={`/${userInfo.username}`}>Profile</Dropdown.Item>
                        <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
                    </DropdownButton>
                </>
            ) : (
                <div>
                    <LinkContainer to='/account/signup'><Button variant="primary"  >Signup</Button></LinkContainer>
                    <LinkContainer to='/account/login'><Button variant="primary"  >Login</Button></LinkContainer>
                </div>
            )
            }
        </Navbar>

    )
}

export default Header
