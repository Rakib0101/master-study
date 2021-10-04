import React from 'react';
import useReviews from '../../../Hooks/useReviews';
import Singletestimonial from './SingleTestimonial/SingleTestimonial';

const Testimonial = () => {
    const [reviews] = useReviews([])
    return (
        <div className="bg-purple-300 py-16">
            <div className="container mx-auto">
                <h2 className="text-6xl text-left mb-8">Testimonial:</h2>
                <div className="grid grid-cols-3 gap-4">
                    {
                        reviews.slice(0,3).map(review => <Singletestimonial key={review.key} course={review}></Singletestimonial>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;