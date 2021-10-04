import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HeroSection = () => {
    const arrowIcon = <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
    return (
            <div className="hero-section relative pt-24">
                <div className="container mx-auto flex justify-between">
                    <div className="w-1/2">
                        <div className="glass-effect relative bg-white rounded-full h-96 w-96 mt-24">
                            <div className="absolute top-0 left-0 text-white">
                                <h3 className="text-2xl">LEARN TO COOK WITH</h3>
                                <h1 className="text-9xl font-semibold font-sans">ROBERT</h1>
                                <h1 className="text-9xl font-semibold pl-48">THEON</h1>
                                <button className="bg-white mt-4 text-black py-2 px-4 rounded">Learn More {arrowIcon}</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="w-3/4 p-8 mx-auto">
                            <img className="rounded-lg" src="./images/hero-bg.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="shape-custom absolute left-0 w-full h-full">
                    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,192L1440,64L1440,320L0,320Z"></path></svg>
                </div>
            </div> 
    );
};

export default HeroSection;