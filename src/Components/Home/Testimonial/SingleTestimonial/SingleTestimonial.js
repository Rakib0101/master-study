import React from 'react';

const SingleTestimonial = (props) => {
    const {name, img, position, comments} =props.course
    return (
        <div className="py-4 px-8 glass-effect rounded-md">
            <div className="flex">
                <div className="w-1/4">
                    <img src={img} alt="" />
                </div>
                <div className="w-3/4 text-left pl-4 text-xl">
                    <div className="title">
                        <h2 className="font-bold">{name}</h2>
                    </div>
                    <div>
                        <h2 className="text-lg ">{position}</h2>
                    </div>
                </div>
            </div>
            <div className="text-left text-lg">
                <h2>{comments}</h2>
            </div>
        </div>
    );
};

export default SingleTestimonial;