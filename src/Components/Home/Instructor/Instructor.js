import React from 'react';
import useCourse from '../../../Hooks/useCourse';
import SingleInstructor from './SingleInstructor/SingleInstructor';

const Instructor = () => {
    const [courses] =useCourse([])
    return (
        <div className="instructor-sectio">
            <div className="container mx-auto">
                <h2 className="text-6xl text-semibold text-left pt-12">Our Instructors:</h2>
                <div className="grid grid-cols-3 gap-8 py-16">
                    {
                        courses.slice(0, 3).map(course => <SingleInstructor key={course.key} course={course}></SingleInstructor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructor;