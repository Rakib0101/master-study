import { faBell, faBriefcase, faGlobeAfrica, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import achivementBG from './counter-bg-min.jpg'

const Achivement = () => {
    const earthIcon = <FontAwesomeIcon icon={faGlobeAfrica}></FontAwesomeIcon>
    const bellIcon = <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
    const usersIcon = <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
    const briefCaseIcon = <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
    return (
        <div className="achivement-section" style={{ backgroundImage:`url(${achivementBG})` }}>
            <div className="container mx-auto pb-12">
                <h2 className="text-6xl text-center text-white pt-12 pb-4">Our Achievements</h2>
                <p className="text-white text-center pb-8">Nullam leo ligula, dictum id eleifend interdum, Malesuada vulputate magna</p>
                <div className='grid grid-cols-4 my-4 text-white'>
                    <div>
                        <div className="primary-bg inline-block text-center h-24 w-24 rounded-full relative ">
                            <span className="absolute text-5xl text-white top-1/4 right-1/4 m-0 -translate-y-1/2">{earthIcon}</span>
                        </div>
                        <h2 className="text-6xl py-4 font-bold">94532</h2>
                        <h2 className="text-4xl">Followers</h2>
                    </div>
                    <div>
                        <div className="primary-bg inline-block text-center h-24 w-24 rounded-full relative ">
                            <span className="absolute text-5xl text-white top-1/4 right-1/4 m-0 -translate-y-1/2">{bellIcon}</span>
                        </div>
                        <h2 className="text-6xl py-4 font-bold">223</h2>
                        <h2 className="text-4xl">Classes Completed</h2>
                    </div>
                    <div>
                        <div className="primary-bg inline-block text-center h-24 w-24 rounded-full relative ">
                            <span className="absolute text-5xl text-white top-1/4 right-1/4 m-0 -translate-y-1/2">{usersIcon}</span>
                        </div>
                        <h2 className="text-6xl py-4 font-bold">8267</h2>
                        <h2 className="text-4xl">Students Enrolled</h2>
                    </div>
                    <div>
                        <div className="primary-bg inline-block text-center h-24 w-24 rounded-full relative ">
                            <span className="absolute text-5xl text-white top-1/4 right-1/4 m-0 -translate-y-1/2">{briefCaseIcon}</span>
                        </div>
                        <h2 className="text-6xl py-4 font-bold">374</h2>
                        <h2 className="text-4xl">Certified Teachers</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achivement;