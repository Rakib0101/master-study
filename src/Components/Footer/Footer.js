import { faArrowRight, faEnvelope,faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const arrowIcon = <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
    const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const emailIcon = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    return (
        <div className="bg-gray-700">
            <div className="container mx-auto">
                <div className="footer-top grid grid-cols-4 py-8 gap-4">
                    <div className="about text-left text-white">
                        <h2 className="text-3xl">About Us</h2>
                        <p>Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Morbi at egestas magna.</p><br />
                        <p>Eget lectus molestie, pharetra sem sed, scelerisque felis. Ut ut erat sed nisl finibus tristique. Etiam sit amet ipsum laoreet, iaculis mi ut, ullamcorper nibh</p>
                        <div className="text-left mt-4">
                            <button className="btn px-4 py-2 rounded">Register Now</button>
                        </div>
                    </div>
                    <div className="popular-course text-white text-left">
                        <h2 className="text-3xl mb-4">Popular Courses</h2>
                        <ul>
                            <li className="flex mb-2 items-center">
                                <div className="w-1/3">
                                    <img className="w-1/2" src="./images/course-1.jpg" alt="" />
                                </div>
                                <div>
                                    <h2>Meat with vegetables</h2>
                                    <h3 className="text-gray-300">Shakil Sagor</h3>
                                </div>
                            </li>
                            <li className="flex my-2 items-center">
                                <div className="w-1/3">
                                    <img className="w-1/2" src="./images/course-3.jpg" alt="" />
                                </div>
                                <div>
                                    <h2>Drinks can be fun</h2>
                                    <h3 className="text-gray-300">Sajib Hasan</h3>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1/3">
                                    <img className="w-1/2" src="./images/course-6.jpg" alt="" />
                                </div>
                                <div>
                                    <h2>Making Fast Food</h2>
                                    <h3 className="text-gray-300">Ibnu Mahtab</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="text-white text-left">
                        <h2 className="text-3xl">Important Links:</h2>
                        <nav>
                            <ul className="text-xl">
                                <li className="border-b py-2 border-white hover:text-purple-500">
                                    <Link to="/about-us">{arrowIcon}  About</Link>
                                </li>
                                <li className="border-b py-2 border-white hover:text-purple-500">
                                    <Link to="/courses">{arrowIcon}  Courses</Link>
                                </li>
                                <li className="border-b py-2 border-white hover:text-purple-500">
                                    <Link to="/blog">{arrowIcon}  Blog</Link>
                                </li>
                                <li className="border-b py-2 border-white hover:text-purple-500">
                                    <Link to="/contact">{arrowIcon}  Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="contact text-left text-white">
                        <h2 className="text-3xl mb-4">Contact</h2>
                        <div className="flex text-xl">
                            <h2 className="pr-4 text-red-500">{ locationIcon}</h2>
                            <h2>USA, Callifornia 20, First Avenue, Callifornia</h2>
                        </div>
                        <div className="flex text-xl">
                            <h2 className="pr-4 text-red-500">{phoneIcon}</h2>
                            <h2>Tel.: +88 019 29 032 016</h2>
                        </div>
                        <div className="flex text-xl">
                            <h2 className="pr-4 text-red-500">{emailIcon}</h2>
                            <h2>rakib.01jan@gmail.com</h2>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom text-white py-4">
                    <p>Copyright © 2021 MasterStudy React Tempate by <a className="text-red-500 font-semibold" href="/">Rakibul Islam</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;