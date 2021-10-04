import React from 'react';
import Rating from 'react-rating';

const SingleInstructor = (props) => {
    const {instructorImg, instructorName, instructorEdu, instructorRating} = props.course
    return (
        <div className="glass-effect rounded-md">
            <div className="px-16 py-4">
                <img className="rounded-full" src={instructorImg} alt="" />
            </div>
            <Rating
                emptySymbol="far fa-star"
                fullSymbol= "fas fa-star"
                initialRating={instructorRating}
                readonly
                style={{
                    color: "#FFB805",
                    marginBottom: "10px"

                }}
            >
                
            </Rating>
            <h2 className="text-3xl font-bold text-gray-900 pb-4">{instructorName}</h2>
            <h2 className="text-2xl font-bold text-red-500 pb-4">{instructorEdu}</h2>
            
        </div>
    );
};

export default SingleInstructor;