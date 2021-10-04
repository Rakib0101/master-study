import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const loginIcon = <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
    return (
        <div>
            <div className="bg-gray-700 text-white py-2">
                <p>Get <span className="text-red-600 font-bold text-xl">25%</span> discount in whole october month for all courses</p>
            </div>
            <div className="container mx-auto">
                <div className="main-nav flex justify-between py-4">
                    <div className="logo-area">
                        <Link to="/">
                            <img src="./images/logo.svg" alt="" /> 
                        </Link>
                    </div>
                    <div className="nav-area">
                        <ul className="flex justify-end items-center text-bold text-xl">
                            <li className="pr-4">
                                <NavLink
                                    exact
                                    to="/"
                                    activeStyle={
                                        {
                                            fontWeight: "bold",
                                            color: "red"
                                        }}>Home
                                </NavLink>
                            </li>
                            <li className="pr-4">
                                <NavLink
                                    exact
                                    to="/about-us"
                                    activeStyle={
                                        {
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                >About Us</NavLink>
                            </li>
                            <li className="pr-4">
                                <NavLink
                                    exact
                                    to="/courses"
                                    activeStyle={
                                        {
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                >Courses</NavLink>
                            </li>
                            <li className="pr-4">
                                <NavLink
                                    exact
                                    to="/blog"
                                    activeStyle={
                                        {
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                
                                >Blog</NavLink>
                            </li>
                            <li className="pr-4">
                                <NavLink
                                    exact
                                    to="/contact"
                                    activeStyle={
                                        {
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                
                                >Contact</NavLink>
                            </li>
                            <li className="bg-red-500 px-4 py-2 cursor-pointer rounded text-white">
                                <NavLink to="/">{loginIcon}Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;