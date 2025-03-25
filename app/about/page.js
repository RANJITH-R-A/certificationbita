"use client";
// import TestPage from "../../app/components/Testpage"
export default function About() {
    return (
        <div>
            {/* about banner start */}
            <section className="bg-[url(/aboutpageimages/cf_banner.png)] bg-center bg-cover h-96 relative">
                <div className=" flex items-center justify-center lg:justify-evenly h-full">
                <img src="/aboutpageimages/bannerimg2.png" className="h-40 md:h-72 hidden md:block" alt="bannerimage" />
                    <div className="">
                        <h1 className="text-themeblue font-bold text-2xl text-center lg:text-start">
                            Be at the forefront of your industry
                        </h1>
                        <p className="text-lg text-themelightblack mt-3 text-center lg:text-start">Join BITA to name your certificate and <br /> propel your career forward.</p>
                    </div>
                    <img src="/aboutpageimages/aboutbannerimg.png" className="absolute right-11 -bottom-20 md:bottom-[-125] h-40 md:h-64" alt="banneritemimage" />
                </div>
            </section>
            {/* about banner end */}

            {/* about content start */}
            <section className="my-[80px] mx-5 md:mx-11 text-sm">
                <div>
                    <h2 className="text-themeblue font-bold text-2xl my-7">About BITA</h2>
                    <p className="text-sm text-justify">Welcome to BITA IT certification Programs online, where we help students and professionals achieve new heights in their current roles through comprehensive certification training programs. At BITA, we understand the constantly changing landscape of the IT sector and the significance of being ahead of the curve. That is why we are committed to offering high-quality training that prepares our students with the skills and information they need to succeed in their respective industries.</p>
                </div>
                <div>
                    <h2 className="text-themeblue font-bold text-2xl my-7">Our Mission</h2>
                    <ul className=" list-disc text-justify ms-6">
                        <li>Our objective is simple: to close the gap between desire and achievement.</li>
                        <li className="mt-2">Whether you're a fresh graduate trying to jumpstart your career or a seasoned professional looking to upskill, BITA has a variety of online IT Certification programs tailored to your needs.
                        </li>
                    </ul>
                </div>
                <div className="pb-10">
                    <h2 className="text-themeblue font-bold text-2xl my-7">
                    Certification That Sets You Apart
                    </h2>
                    <p className="text-sm text-justify">Earning a certification from BITA is more than just adding a credential to your resume – it's a testament to your dedication and expertise. Our rigorous certification exams are designed to validate your skills and knowledge, giving you a competitive edge in the job market.</p>
                    <p className=" my-4 text-sm text-justify">But our online IT certification programs are more than just a piece of paper—they're a badge of honor demonstrating your commitment to excellence and continuous learning. Whether you're aiming for industry-standard certifications like Python, CompTIA, Cisco, or Microsoft or seeking specialized certifications in emerging technologies, BITA has the resources and expertise to help you achieve your goals.</p>
                    <p className="text-sm text-justify">At BITA, we offer thorough certification training customized explicitly to each course's exam syllabus. Our dedication to quality extends to how we prepare our students for certification tests. We focus on authentic learning experiences and do not provide certification exam materials. We genuinely believe in the need for genuine preparation, which improves subject knowledge and cultivates critical skills for success in the field. While our service allows you to practice third-party certification examinations to assess your readiness and topic knowledge, our intensive training genuinely prepares you to thrive and confidently pass any certification exam.</p>
                </div>
                <section className="bg-themegray py-8 px-5">
                    <div>
                        <h2 className="text-themeblue font-bold text-2xl py-5">Why Choose BITA?</h2>
                        <div className="mb-5">
                            <h3 className="text-themeblue font-bold text-md my-1">Industry Proficient Instructors: </h3>
                            <p className="text-sm text-justify">Our IT certification programs online are taught by seasoned professionals in the field. By imparting practical knowledge and real-world insights, they guarantee that our pupils not only comprehend the theoretical principles but also know how to implement them effectively in practical situations.                        </p>
                        </div>
                        <div className="mb-5">
                            <h3 className="text-themeblue font-bold text-md my-1">Comprehensive Curriculum:</h3>
                            <p className="text-sm text-justify">Our IT certification programs online provide a comprehensive curriculum encompassing various subjects, including fundamental IT principles and advanced specialized skills. We offer courses that cater to your specific areas of interest, including software development, cloud computing, cybersecurity, data analytics, and more.
                            </p>
                        </div>
                        <div className="mb-5">
                            <h3 className="text-themeblue font-bold text-md my-1">Practical Education:</h3>
                            <p className="text-sm text-justify">Our stance is one of "learning by doing." As a result, our IT certification programs online are highly interactive and packed with laboratories, projects, and practical exercises to reinforce knowledge. Through simulated cybersecurity assaults and coding challenges, our hands-on approach guarantees that you acquire the knowledge, abilities, and self-assurance necessary to thrive in the field.
                            </p>
                        </div>
                        <div className="mb-5">
                            <h3 className="text-themeblue font-bold text-md my-1">Adaptable Learning Alternatives: </h3>
                            <p className="text-sm text-justify">We recognize that each individual's timetable is unique. We provide flexible learning options to facilitate students and professionals with hectic schedules. We have a solution to meet your requirements, whether you would instead attend classes in person at our state-of-the-art facilities or participate in live online sessions from the convenience of your residence.
                            </p>
                        </div>
                        <div className="mb-5">
                            <h3 className="text-themeblue font-bold text-md my-1">Career Support:</h3>
                            <p className="text-sm text-justify">We prioritize your success. Beyond delivering exceptional training, we also provide career support services designed to assist you in securing your ideal position. We provide comprehensive support throughout the process, including job placement assistance, mock interviews, and more.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="h-auto pt-10 text-justify">
                        <div className="flex items-center gap-4">
                            <img src="/aboutpageimages/roadmap.png" className="w-28 max-w-24" />
                            <h2 className="text-themeblue font-bold text-2xl">Road Map To Success</h2>
                        </div>
                        <div className=" relative ms-10 pt-7">
                            <div className="flex items-center md:gap-x-24">
                                <img src="/aboutpageimages/step1.png" className="max-w-16" />
                                <div className="my-5">
                                    <h3 className="text-themeblue text-lg my-1">Choose Your Path:</h3>
                                    <ul className=" list-disc ms-10">
                                        <li>Identify your career goals and interests.</li>
                                        <li>Explore certification tracks like Microsoft, Python, CompTIA, GIAC, ISACA, etc.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center md:gap-x-24">
                                <img src="/aboutpageimages/step2.png" className="max-w-16" />
                                <div className="my-5">
                                    <h3 className="text-themeblue text-lg my-1">Assess Your Skills:</h3>
                                    <ul className=" list-disc ms-10">
                                        <li>Evaluate your current knowledge and experience.</li>
                                        <li>Determine the level of certification that aligns with your expertise (Fundamental, Associate, Expert).</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center md:gap-x-24">
                                <img src="/aboutpageimages/step3.png" className="max-w-16" />
                                <div className="my-5">
                                    <h3 className="text-themeblue text-lg my-1">Select Your Certification:</h3>
                                    <ul className=" list-disc ms-10">
                                        <li>Based on your path and skill level, choose the appropriate certification.</li>
                                        <li>Explore the available exams and certification requirements.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center md:gap-x-24">
                                <img src="/aboutpageimages/step4.png" className="max-w-16" />
                                <div className="my-5">
                                    <h3 className="text-themeblue text-lg my-1">Prepare Strategically:</h3>
                                    <ul className=" list-disc ms-10">
                                        <li>Utilize the official chosen certification websites for learning resources and updates.</li>
                                        <li>Consider instructor-led training courses or self-paced study materials.</li>
                                        <li>Practice with hands-on labs and virtual environments.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center md:gap-x-24">
                                <img src="/aboutpageimages/step5.png" className="max-w-16" />
                                <div className="my-5">
                                    <h3 className="text-themeblue text-lg my-1">Dive into Exam Preparation:</h3>
                                    <ul className=" list-disc ms-10">
                                        <li>Study exam objectives thoroughly.</li>
                                        <li>Utilize practice tests to assess your readiness.</li>
                                        <li>Review documentation and whitepapers related to your chosen certification.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center md:gap-x-24">
                                <img src="/aboutpageimages/step6.png" className="max-w-16" />
                                <div className="my-5">
                                    <h3 className="text-themeblue text-lg my-1">Engage with the Community:</h3>
                                    <ul className=" list-disc ms-10">
                                        <li>Join chosen certification forums and communities.</li>
                                        <li>Participate in study groups or discussion boards.</li>
                                        <li>Seek guidance and advice from certified professionals.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center md:gap-x-24">
                                <img src="/aboutpageimages/step7.png" className="max-w-16" />
                                <div className="my-5">
                                    <h3 className="text-themeblue text-lg my-1">Schedule Your Exam:</h3>
                                    <ul className=" list-disc ms-10">
                                        <li>Register for your exam through the respective official Certification Dashboard.</li>
                                        <li>Choose a convenient exam date and location.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center md:gap-x-24">
                                <img src="/aboutpageimages/step8.png" className="max-w-16" />
                                <div className="my-5">
                                    <h3 className="text-themeblue text-lg my-1">Take the Exam:</h3>
                                    <ul className=" list-disc ms-10">
                                        <li>Remain calm and focused during the exam.</li>
                                        <li>Read each question carefully and manage your time effectively.</li>
                                        <li>Utilize the total exam duration to review and verify your answers.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center md:gap-x-24">
                                <img src="/aboutpageimages/step9.png" className="max-w-16" />
                                <div className="my-5">
                                    <h3 className="text-themeblue text-lg my-1">Celebrate Your Success:</h3>
                                    <ul className=" list-disc ms-10">
                                        <li>Upon passing the exam, celebrate your achievement!</li>
                                        <li>Update your resume and LinkedIn profile with your new certification.</li>
                                        <li>Consider pursuing advanced certifications or specialization to enhance your skills further.</li>
                                    </ul>
                                </div>
                            </div>
                        <div className="p-3 w-7 bg-themegray hidden md:block h-full absolute top-6 left-24 rounded  "></div>

                        </div>
                    </div>
                </section>
            </section>

            {/* about content end */}

        </div>
    );
}