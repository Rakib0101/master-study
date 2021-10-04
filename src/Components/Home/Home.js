import React from 'react';
import Achivement from './Achivement/Achivement';
import HeroSection from './HeroSection/HeroSection';
import "./Home.css"
import Instructor from './Instructor/Instructor';
import LearningSection from './LearningSection/LearningSection';
import RecentCorses from './RecentCourses/RecentCorses';
import Subscribe from './Subscribe/Subscribe';
import Testimonial from './Testimonial/Testimonial';
import TopCourses from './TopCourses/TopCourses';


const Home = () => {
    
    return (
        <div className="">
            <HeroSection></HeroSection>
            <TopCourses></TopCourses>
            <LearningSection></LearningSection>
            <Achivement></Achivement>
            <RecentCorses></RecentCorses>
            <Instructor></Instructor>
            <Testimonial></Testimonial>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;