import React from 'react';
import useCourse from '../../Hooks/useCourse';
import SingleCourse from '../Home/TopCourses/SingleCourse/SingleCourse';

const Courses = () => {
    const [courses] =useCourse([])
    return (
        <div>
            <div className="container mx-auto py-12">
                <h2 className="text-4xl text-left py-4">Popular Courses</h2>
                <div className="grid grid-cols-4 gap-4">
                    {
                        courses.map(course => <SingleCourse key={course.key} course={course}></SingleCourse>)
                    }
                </div>
                <h2 className="text-4xl text-left py-4">Trending Courses</h2>
                <div className="grid grid-cols-4 gap-4">
                    {
                        courses.map(course => <SingleCourse key={course.key} course={course}></SingleCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;