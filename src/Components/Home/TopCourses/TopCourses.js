import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCourse from './SingleCourse/SingleCourse';

const TopCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("./CourseLists.JSON")
            .then(res => res.json())
            .then(data =>setCourses(data))
    }, [])
    return (
        
        <div className="mt-8">
            <div className="container mx-auto">
                <h2 className="text-4xl text-left text-black pb-4">Top Courses</h2>
                <div className="grid grid-cols-4 gap-4">
                    {
                        courses.slice(0, 4).map(course =>
                            <SingleCourse key={course.key} course={course}></SingleCourse>
                        )
                    }
                </div>
                <div className="my-8">
                    <button className="btn font-semibold text-white rounded px-4 py-2"><Link to="/courses">More Courses</Link></button>
                </div>
            </div>
        </div>
    );
};

export default TopCourses;