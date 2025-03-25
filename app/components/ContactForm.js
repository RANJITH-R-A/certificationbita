"use client";
import { useState } from "react";

export default function ScheduleDemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    occupation: "",
    certificationName: "",
    certificationCode: "",
    demoDate: "",
    demoTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Demo Scheduled Successfully!");
    } else {
      alert("Failed to Schedule Demo.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-gray-300 p-8 rounded-md shadow-md">
        <h2 className="text-lg font-semibold text-white bg-blue-600 px-4 py-2 mb-6 rounded-md">
          Schedule a Demo - 30 Mins
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" onChange={handleChange} className="input-field" />
          <input type="text" name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} className="input-field" />
          <input type="email" name="email" placeholder="E-Mail Id" onChange={handleChange} className="input-field" />
          <input type="text" name="occupation" placeholder="Occupation" onChange={handleChange} className="input-field" />
          <input type="text" name="certificationName" placeholder="Certification Name" onChange={handleChange} className="input-field" />
          <input type="text" name="certificationCode" placeholder="Certification Code" onChange={handleChange} className="input-field" />
          <input type="date" name="demoDate" onChange={handleChange} className="input-field" />
          <input type="time" name="demoTime" onChange={handleChange} className="input-field" />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded-md w-full hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
