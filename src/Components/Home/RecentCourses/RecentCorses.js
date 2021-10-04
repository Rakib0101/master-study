import React from 'react';
import { Link } from 'react-router-dom';
import useCourse from '../../../Hooks/useCourse';
import SingleCourse from '../TopCourses/SingleCourse/SingleCourse';

const RecentCorses = () => {
    const [courses] = useCourse([])
    return (
        <div>
            <div className="mt-8">
            <div className="container mx-auto">
                <h2 className="text-4xl text-left text-black pb-4">Recent Courses</h2>
                <div className="grid grid-cols-4 gap-4">
                    {
                        courses.slice(5, 9).map(course =>
                            <SingleCourse key={course.key} course={course}></SingleCourse>
                        )
                    }
                </div>
                <div className="my-8">
                    <button className="btn font-semibold text-white rounded px-4 py-2"><Link to="/courses">More Courses</Link></button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default RecentCorses;