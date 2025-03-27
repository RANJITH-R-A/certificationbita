"use client";

export default function ContactForm() {
  return (
    <div className="flex justify-center my-10 items-center rounded-lg">
      <div className="w-full max-w-6xl bg-gray-300 rounded-md">
        <h2 className="text-md  text-white text-center bg-themeblue px-4 py-2 rounded-t-md">
          Schedule a Demo - 30 Mins
        </h2>
        <form className=" space-y-4 px-2 py-4  text-[12px]">
          <input type="text"  name="name" placeholder="Name"  className="input-field" />
          <input type="text" name="mobileNumber" placeholder="Mobile Number"  className="input-field" />
          <input type="email" name="email" placeholder="E-Mail Id"  className="input-field" />
          <input type="text" name="certificationName" placeholder="Certification Name or Code"  className="input-field" />
          <input type="text" name="demoDate" placeholder="Tentative Date for Demo"  className="input-field" />
          <input type="text" name="demoTime" placeholder="Available Time for Demo"  className="input-field" />
          <button type="submit" className="bg-themeblue text-white py-2 w-[50%] shadow-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
