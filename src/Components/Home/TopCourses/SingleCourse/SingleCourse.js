import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleCourse = (props) => {
    const a = useParams()
    console.log(a);
    const {courseName, courseCategory, courseThumb, courseFee, courseDuration} = props.course
    return (
        <div className="col-span-1 rounded p-2 glass-effect">
            <div>
                <img className="rounded-lg" src={courseThumb} alt="" />
            </div>
            <div className="px-4 py-2 text-left">
                <h2 className="text-lg">{courseCategory}</h2>
                <h2 className="text-green-700 font-semibold pb-16 hover:text-blue-600 text-xl"><Link>{courseName}</Link></h2>
                <hr />
            </div>
            <div className="flex px-4 py-1 justify-between font-semibold text-xl">
                <div>{courseDuration}</div>
                <div>{courseFee}</div>
            </div>
        </div>
    );
};

export default SingleCourse;