import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="bg-gray-600 overflow-hidden">
            <div className="w-1/2 mx-auto">
                <div className="mt-12">
                    <button className="primary-bg px-4 py-2 rounded"><Link to="/">Go Home</Link></button>
                </div>
                <img src="./images/404.png" alt="" />
                <div>
                    <h2 className="text-4xl py-4">Not Found 404</h2>
                </div>
            </div>
        </div>
    );
};

export default NotFound;