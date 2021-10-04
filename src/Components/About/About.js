import React from 'react';

const About = () => {
    return (
        <div>
            <div className="container mx-auto pt-8">
                <div className="flex text-left items-center">
                    <div className="w-1/2 pr-8">
                        <h2 className="text-3xl font-bold">Welcome to Master Study!</h2>
                        <p>Online studies are designed for students whose scheduling commitments would otherwise make it difficult to enroll in a full-time higher education program. Offered for individual courses, diplomas, associate’s degrees and certificate programs, online studies are a valuable option. The resulting qualification a graduate receives after successfully completing.</p>
                        <p>Unordered & Ordered Lists</p>
                        <ul className="list-decimal list-inside text-xl">
                            <li>Online Courses with full discount systems.</li>
                            <li>Online Certificates which can be used worldwide.</li>
                            <li>An online leadership development program at Masterstudy LMS.</li>
                        </ul>
                    </div>
                    <div className="w-1/2">
                        <img src="./images/about-us.jpg" alt="" />
                    </div>
                </div>
                <div className="flex items-center text-left">
                    <div>
                        <img src="./images/about-us-2.jpg" alt="" />
                    </div>
                    <div className="pl-16">
                        <h2 className="text-3xl font-bold pb-12">Professional Certificate Courses (Online)</h2>
                        <ul className="list-disc list-inside text-xl">
                            <li>Online certificates can be obtained in a range of specialized areas.</li>
                            <li>Online diplomas are awarded for one to two years of study with LMS.</li>
                            <li>Online associate degrees usually take approximately two years then.</li>
                            <li>Online preparatory year programs are an opportunity for students.</li>
                            <li>Online Summer courses are a great way to gain qualifications.</li>
                        </ul>
                    </div>
                </div>
                <div className="py-12">
                    <h2 className="text-4xl text-left pb-8">Certifications</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <div className="bg-pink-400 p-8 border-8 border-gray-700">
                                <img className="border-8 border-black" src="./images/certificate.png" alt="" />
                            </div>
                            <h2 className="text-2xl py-4">Google Certified</h2>
                        </div>
                        <div>
                            <div className="bg-pink-400 p-8 border-8 border-gray-700">
                                <img className="border-8 border-black" src="./images/certificate.png" alt="" />
                            </div>
                            <h2 className="text-2xl py-4">Microsoft Certified</h2>
                        </div>
                        <div>
                            <div className="bg-pink-400 p-8 border-8 border-gray-700">
                                <img className="border-8 border-black" src="./images/certificate.png" alt="" />
                            </div>
                            <h2 className="text-2xl py-4">Apple Certified</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;