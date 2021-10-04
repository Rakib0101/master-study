import { faSkype } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faGlobeAmericas, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Iframe from 'react-iframe';

const Contact = () => {
    const mapIcon = <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
    const webIcon = <FontAwesomeIcon icon ={faGlobeAmericas}></FontAwesomeIcon>
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const emailIcon = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    const skypeIcon = <FontAwesomeIcon icon={faSkype}></FontAwesomeIcon>
    return (
        <div>
            <div className="container mx-auto py-16">
                <div className="flex text-left">
                    <div className="w-1/2 pb-12">
                        <h2 className="text-4xl font-bold pb-4">Contact Info:</h2>
                        <div className="flex border-t border-b border-gray-400 py-4">
                            <div className="">
                                <h2 className="text-red-500 text-3xl pr-4">{mapIcon}</h2>
                            </div>
                            <div className="">
                                <h2>Postal Address:</h2>
                                <h3>PO Box 97845 Baker st. 567, Los Angeles, California, US.</h3>
                            </div>
                        </div>
                        <div className="flex border-b border-gray-400 py-4">
                            <div className="flex w-1/2">
                                <div className="">
                                    <h2 className="text-red-500 text-3xl pr-4">{phoneIcon}</h2>
                                </div>
                                <div>
                                    <h2>Phone:</h2>
                                    <h3>+8 (800) 659-2684</h3>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div>
                                    <h2 className="text-red-500 text-3xl pr-4">{skypeIcon}</h2>
                                </div>
                                <div>
                                    <h2>Skype:</h2>
                                    <h3>Johndoeteacher</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-b border-gray-400 py-4">
                            <div className="flex w-1/2">
                                <div>
                                    <h2 className="text-red-500 text-3xl pr-4">{emailIcon}</h2>
                                </div>
                                <div>
                                    <h2>Email:</h2>
                                    <h3>peterparker@masterstudy.com</h3>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div>
                                    <h2 className="text-red-500 text-3xl pr-4">{webIcon}</h2>
                                </div>
                                <div>
                                    <h2>Web:</h2>
                                    <h3>stylemixthemes.com</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-4xl font-bold pb-4">Location Info:</h2>
                        <div><Iframe
                            url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388.75068840350747!2d-90.50382785325031!3d38.786508106921204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df2f19e20b6def%3A0x46b335b39c1db1b8!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQm9C40L3QtNC10L3QstGD0LQ!5e0!3m2!1sru!2s!4v1435659240372'
                            width='100%'
                            height="400px"
                        >
                        </Iframe></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;