"use client";
import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";

export default function DynamicPage({slug}) {
    // const { slug } = useParams();
    console.log(slug)
    const [getcertifications, setGetCertifications] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/TestData.json");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setGetCertifications(data);
            } catch (error) {
                console.error("Error fetching JSON:", error);
            }
        };

        fetchData(); // Call the async function
    }, [slug]);

    const certification = getcertifications.find((item) => item.slug.toLowerCase() === slug.toLowerCase());
    console.log(certification);

    return (
        <>
            {/* <h1>Hello</h1> */}

            {certification ? (
                <div>
                    <section className="flex ">
                        <div className="w-3/4 px-8 py-6 text-[15px] text-justify">

                            <h1 className="text-3xl text-themeblue font-semibold my-5">{certification.cheading}</h1>

                            {certification.courseoverview && (
                                <>
                                    {Array.isArray(certification.courseoverview) ? (
                                        <ul className=" list-disc ms-8">
                                            {certification.courseoverview.map((item, index) => (
                                                <li key={index} className="mb-1">{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="leading-6">{certification.courseoverview}</p>
                                    )}
                                </>
                            )}

                            <h2 className="text-xl text-themeblue font-medium my-5">{certification.whytakecourseheading}</h2>

                            {certification.wtcintro && (<p className="my-2">{certification.wtcintro}</p>)}
 
                            <p className=" leading-6">{certification.wtcoursecontent}</p>

                            <h2 className="text-xl text-themeblue font-medium my-5">{certification.whocanlearnheading}</h2>

                            <p className="my-2">{certification.wclcontent}</p>

                            {certification.wclpoints && (
                                <>
                                    {Array.isArray(certification.wclpoints) ? (
                                        <ul className=" list-disc ms-8">
                                            {certification.wclpoints.map((item, index) => (
                                                <li key={index} className="mb-1">{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="leading-6">{certification.wclpoints}</p>
                                    )}
                                </>
                            )}

                           
                            <h2 className="text-xl text-themeblue font-medium my-5">{certification.courseprerequestheading}</h2>

                            {certification.prerequestintro && (<p className="my-2">{certification.prerequestintro}</p>)}

                            {certification.courseprerequcontent && (
                                <>
                                    {Array.isArray(certification.courseprerequcontent) ? (
                                        <ul className=" list-disc ms-8">
                                            {certification.courseprerequcontent.map((item, index) => (
                                                <li key={index} className="mb-1">{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="leading-6">{certification.courseprerequcontent}</p>
                                    )}
                                </>
                            )}
                                
                            <h2 className="text-xl text-themeblue font-medium my-5">{certification.howtoapplyheading}</h2>
                            
                            {certification.htaintro && (<p className="my-2">{certification.htaintro}</p>)}

                            {certification.howtoapplycontent && (
                                <>
                                    {Array.isArray(certification.howtoapplycontent) ? (
                                        <ul className=" list-disc ms-8">
                                            {certification.howtoapplycontent.map((item, index) => (
                                                <li key={index} className="mb-1">{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="leading-6">{certification.howtoapplycontent}</p>
                                    )}
                                </>
                            )}
                            
                            <h2 className="text-xl text-themeblue font-medium my-5">{certification.costofcourseheading}</h2>
                            
                            <p className=" leading-6">{certification.costofcoursecontent}</p>
                                
                            <h2 className="text-xl text-themeblue font-medium my-5">{certification.obtaincourseheading}</h2>
                            
                            {certification.obtainintro && (<p className="my-2">{certification.obtainintro}</p>)}


                            {certification.obtaincoursecontent && (
                                <>
                                    {Array.isArray(certification.obtaincoursecontent) ? (
                                        <ul className=" list-disc ms-8">
                                            {certification.obtaincoursecontent.map((item, index) => (
                                                <li key={index} className="mb-1">{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="leading-6">{certification.obtaincoursecontent}</p>
                                    )}
                                </>
                            )}
                                
                            <h2 className="text-xl text-themeblue font-medium my-5">{certification.significanceheading}</h2>

                            {certification.signficcanintro && (<p className="my-2">{certification.signficcanintro}</p>)}

                            {certification.significancepoints && (
                                <>
                                    {Array.isArray(certification.significancepoints) ? (
                                        <ul className=" list-disc ms-8">
                                            {certification.significancepoints.map((item, index) => (
                                                <li key={index} className="mb-1">{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="leading-6">{certification.significancepoints}</p>
                                    )}
                                </>
                            )}
                            
                            <p className="my-2">{certification.finally}</p>
                       
                        </div>
                        <div className="h-96 w-1/4 pt-9 pe-8">
                            <div className="bg-themeblueprint text-themewhite w-[95%] p-5 mx-auto rounded-md">
                                <p className="text-center pb-3">Blue Print of PCEP  Exam</p>
                                <ul className="text-[12px] border border-themewhite p-5 rounded-md">
                                    <li className="pb-1">Computer Programming and Python Fundamentals  - 12%</li>
                                    <li className="pb-1">Control Flow – Conditional Blocks and Loops (29%)</li>
                                    <li className="pb-1">Data Collections – Tuples, Dictionaries, Lists, and Strings (25%)</li>
                                    <li className="pb-1">Functions and Exceptions (28%) </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            ) : (
                <p>Loading or No Certification Found</p>
            )}

        </>
    );
}


{/* <div>
<h1>{certification.title}</h1>
<p><strong>Description:</strong> {certification.description}</p>
<p><strong>Content:</strong> {certification.content}</p>

Course Overview (Handles Array or String)
{certification.courseoverview && (
    <>
        <h2>Course Overview</h2>
        {Array.isArray(certification.courseoverview) ? (
            <ul>
                {certification.courseoverview.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        ) : (
            <p>{certification.courseoverview}</p>
        )}
    </>
)}

Why Take This Course? (Handles Array or String)
{certification.whytakecourse && (
    <>
        <h2>Why Take This Course?</h2>
        {Array.isArray(certification.whytakecourse) ? (
            <ul>
                {certification.whytakecourse.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        ) : (
            <p>{certification.whytakecourse}</p>
        )}
    </>
)}

Certification Requirement (Optional)
{certification.certification && (
    <>
        <h2>Certification Requirement</h2>
        <p>{certification.certification}</p>
    </>
)}
</div> */}