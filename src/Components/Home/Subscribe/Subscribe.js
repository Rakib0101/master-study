import React from 'react';

const Subscribe = () => {
    return (
        <div className="primary-bg py-24">
            <div className="container mx-auto flex">
                <div className="w-1/2 text-left text-white">
                    <h2 className="text-5xl">Subscribe Our Newsletter</h2>
                    <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the</p>
                </div>
                <div className="w-1/2">
                    <h2 className="text-left pl-20 text-white text-2xl pb-4">Write Your E-mail Address</h2>
                    <div className="flex w-3/4 mx-auto">
                        <input className="w-full py-4 pl-8 outline-none rounded-l-full" type="text" />
                        <button className="px-4 text-white bg-gray-700 rounded-r-full">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;