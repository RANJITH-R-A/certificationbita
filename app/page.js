"use client"
import CertificationAll from "./components/CertificationAll"
import { useState,useEffect } from "react";
import Image from "next/image";



export default function Home() {
  const [dataset, Setdataset] = useState([]);

 useEffect(() => {
  const getdata = async () => {
    try{
      const reponse = await fetch("/data/TestData.json");
      if(!reponse.ok){
        throw new Error(`HTTP Error! Status : ${reponse.status}`);
      }
      const getcorrectdata = await reponse.json()
      Setdataset(getcorrectdata);
    }
    catch (error) { 
      console.error("Error fetching JSON:", error)
    }
  };
  getdata();
 },[])

 const getnewdata = dataset.map((getvalue) => getvalue.slug);
 console.log(getnewdata)
  return (
    <>
      <main>
        {/* home banner start */}
         <section className="bg-[url(/homepageimages/homebannerimage.webp)] bg-center bg-cover h-96 px-4">
          <div className=" flex items-center justify-center lg:justify-end h-full relative">
           <div className="lg:pr-[140px]">
           <h1 className="text-themeblue font-bold text-lg lg:text-2xl text-center lg:text-start">
            Simplify Your Certification Exam Journey! 
            </h1>
            <p className="text-sm text-themelightblack text-center lg:text-start py-2">Your Ultimate Online Companion for Professional Certification Mastery.</p>
           </div>
           {/* <img src="/homepageimages/homebanneritem.webp" className="absolute right-11 bottom-[-90] h-64" alt="banneritemimage" /> */}
           <div className="absolute right-11 bottom-[-60] lg:bottom-[-95]">
           <Image src="/homepageimages/homebanneritem.webp" height={256} width={312} alt="banneritemimage" className="max-lg:w-[90%]" />
           </div>
          </div>
         </section>
        {/* home banner end */}
        {/* training pattern start */}
        <section className="my-[80px] mx-5 lg:mx-11 text-sm text-justify">
         <h1 className="text-themeblue font-bold text-center lg:text-start text-2xl my-7">
          Conquer certification exams fearlessly with BITA
         </h1>
         <p className="text-sm text-themelightblack">Are you seeking a career shift but are terrified by the thought of certification exams? Look no further than BITA IT certification Programs online! We recognize that facing certification examinations might be intimidating, but we are here to help you overcome your concerns and achieve your professional objectives. At BITA, we provide comprehensive  IT certification programs online that will give you the knowledge, skills, and confidence you need to pass your tests. Our skilled teachers offer personalized assistance and support at every stage, ensuring you are prepared to succeed on exam day.</p>
         <p className="my-4 text-sm text-themelightblack">We provide everything you need to get Microsoft, Python, CompTIA, GIAC, ISACA, or any other IT certification programs online. Our bespoke training approach suits learners of all levels, from beginners to seasoned professionals looking to upskill or transition into new professions.</p>
         <p className="text-sm text-themelightblack">Do not allow fear to stop you from chasing your dreams. Join BITA IT certification Programs online today and take the first step toward a successful career in the ever-changing world of information technology.</p>
        </section>
        {/* training pattern end */}
        {/* certification start  */}
        <CertificationAll/>
        {/* certification start  */}

      </main>
    </>
  );
}
