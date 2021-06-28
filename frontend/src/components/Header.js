import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { logout } from "../actions/UserActions";
import SearchBox from "./SearchBox";
import './Header.scss'
import { Link } from "react-router-dom";
import logo from '../assets/logo-1.svg'

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [toggle, setToggle] = useState(false)

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
        history.push("/account/login");
    };

    const dropdownToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className="header">
                <div className="header__logo">
                    <Link to='/'>
                        <img src={logo}></img>
                    </Link>
                </div>
                {userInfo ? (
                    <>

                        <div className="header__searchbar">
                            <Route render={({ history }) => <SearchBox history={history} />} />
                        </div>

                        <div className="header__right">
                            <p>{userInfo.username}</p>
                            <div class="dropdown" >
                                <img onClick={dropdownToggle} src={userInfo.profileImg}></img>
                                <div class={`dropdown-content ${toggle ? 'display' : ''}`}>
                                    <Link onClick={dropdownToggle} to={`/${userInfo.username}`}>Profile</Link>
                                    <Link onClick={logoutHandler}>Logout</Link>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="header__right__out">
                        <Link className="btn-1" to={`/account/login`}>Login</Link>
                        <Link className="btn-2" to={`/account/signup`}>Signup</Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
