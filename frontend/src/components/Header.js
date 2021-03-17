import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/UserActions'
import { Button, Navbar, Form, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'

import './Header.css'

const Header = ({ match }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
        history.push('/login')
    }

    return (
        <Navbar className="d-flex justify-content-between py-3" bg="primary" variant="dark">
            <Navbar.Brand href="/">Social-Network</Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
            {userInfo ? (
                <DropdownButton variant="dark" id="dropdown-basic-button" title={userInfo.name}>
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
                </DropdownButton>
            ) : (
                <div>
                    <LinkContainer to='/signup'><Button variant="primary"  >Signup</Button></LinkContainer>
                    <LinkContainer to='/login'><Button variant="primary"  >Login</Button></LinkContainer>
                </div>
            )
            }
        </Navbar>

    )
}

export default Header
