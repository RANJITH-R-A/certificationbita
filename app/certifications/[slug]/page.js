"use client"; // Ensures it's a client component

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import DynamicPage from "../../components/DynamicPage";
import Faq from "../../components/Faq";

export default function CertificationPage() {
  const { slug } = useParams();
  const [certification, setCertification] = useState(null);
  const [relatedCerts, setRelatedCerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/CertificationName.json"); // Fetch from `public/data`
        if (!response.ok) throw new Error("Failed to load data");
        let certifications = await response.json();

        // Find the certification based on slug
        const foundCertification = certifications.flatMap((category) => category.subcategories)
          .flatMap((subcategory) => subcategory.items)
          .find((item) => item.slug.toLowerCase() === slug.toLowerCase());

        //  related course
        const coursedata = certifications;
        let selectedCert = null;
        let relatedCertsList = [];

        coursedata.forEach((category) => {
          category.subcategories.forEach((subcategory) => {
            const foundCert = subcategory.items.find((cert) => cert.slug === slug);
            if (foundCert) {
              selectedCert = foundCert;
              relatedCertsList = subcategory.items.filter((cert) => cert.slug !== slug); // Exclude current cert
            }
          });
        });

        // const foundCertification1 = certifications
        // console.log(foundCertification,'dataset0');
        // const dataset1 = foundCertification1.flatMap((category) => category.subcategories)
        // console.log(dataset1,'dataset1');
        // const dataset2 = dataset1.flatMap((subcategory) => subcategory.items)
        // console.log(dataset2,'dataset2');
        // const dataset3 = dataset2.find((item) => item.slug.toLowerCase() === slug.toLowerCase());
        // console.log(dataset3,'dataset3');



        if (!foundCertification) throw new Error("Certification Not Found");
        setCertification(foundCertification);
        if (!selectedCert) throw new Error("No Related Certification")
        setRelatedCerts(relatedCertsList);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);



  // const getdata = coursedata.map((getdata1) => getdata1.subcategories)
  // console.log(getdata,'data2')
  // Find the selected course and its category
  // coursedata.subcategories.forEach((subcategory) => {
  //   const foundCourse = subcategory.items.find((item) => item.slug === slug);
  //   if (foundCourse) {
  //     selectedCourse = foundCourse;
  //     relatedCourses = subcategory.items.filter((course) => course.slug !== slug); // Exclude selected course
  //   }
  // });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="pb-20">
      {/* certification banner start */}
      <section className="bg-[url(/certification_img/certification_banner/cf_banner.png)] bg-cover h-96 relative">
        <div className="h-full flex justify-center md:justify-around items-center relative">
          {certification.c_image && <img className=" absolute bottom-0 right-11  md:static h-32 md:h-72 " src={certification.c_image} alt={certification.title} />}
          <ul className=" leading-9 ps-5">
            <li className=" text-sm lg:text-base"><span className="text-themeblue font-bold">Exam Name:</span> Certified Entry Level Python Programmer</li>
            <li className=" text-sm lg:text-base"><span className="text-themeblue font-bold">Prerequisites:</span> None</li>
            <li className=" text-sm lg:text-base"><span className="text-themeblue font-bold">Exam Level:</span> Entry Level Programmer</li>
            <li className=" text-sm lg:text-base"><span className="text-themeblue font-bold">Current Exam Version:</span> PCEP-30-02 </li>
            <li className=" text-sm lg:text-base"><span className="text-themeblue font-bold">Exam Code: </span> PCEP-30-xx</li>
            <li className=" text-sm lg:text-base"><span className="text-themeblue font-bold">Retired Exam Versions:</span> PCEP-30-01 </li>
            <li className=" text-sm lg:text-base"><span className="text-themeblue font-bold">Exam Length:</span> Exam- 40 minutes, NDA/Tutorial- 5 minutes</li>
            <li className=" text-sm lg:text-base"><span className="text-themeblue font-bold">Number of Questions:</span> 30</li>
            <li className=" text-sm lg:text-base"><span className="text-themeblue font-bold">Passing Score:</span> 70%</li>
            <li className=" text-sm lg:text-base"><span className="text-themeblue font-bold">Price:</span> USD 59</li>
          </ul>
        </div>
      </section>
      {/* certification banner end */}

      {/* certification content start */}
      <DynamicPage slug={slug} />
      {/* certification content end */}
      

      {/* certification syllabus start  */}
      <h2 className="text-themeblue text-xl px-10">Certification Syllabus</h2>
      <Faq/>
      {/* certification syllabus end  */}

      {/* related course start */}
      <section className="px-10">
      <h2 className="text-themeblue text-xl">Related Certification Courses</h2>
     <div className="lg:w-[95%] mx-auto">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {relatedCerts ? relatedCerts.map((item) => (
          <div key={item.code}>
            <Link href={`/certifications/${item.slug}`}>
              <div key={item.code} className="border p-1 rounded-lg flex items-center space-x-3 my-3 shadow-md bg-themewhite">
                <img src={item.c_image} alt="Badge" className="w-28 h-28 object-contain" />
                <div>
                  <h3 className="font-bold">{item.code}</h3>
                  <p className="text-sm text-gray-600">{item.title}</p>
                </div>
              </div>
            </Link>
          </div>
        )) : <p>Related Course Not Found</p>}
      </div>
     </div>
      </section>
      {/* related course end  */}






    </div>
  );
}
