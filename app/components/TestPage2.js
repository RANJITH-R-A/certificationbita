"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const certifications = [
  {
    category: "Python Institute Certification",
    subcategories: [
      {
        name: "Python Certified Programmer",
        items: [
          { code: "PCEP", title: "Python Institute Certified Entry-Level Python Programmer", c_image: "/certification_img/python/testimg4.png" },
          { code: "PCAP", title: "Python Institute Certified Associate in Python Programming" },
          { code: "PCPP1", title: "Certified Professional Python Programmer Level 1" },
          { code: "PCPP2", title: "Certified Professional Python Programmer Level 2" },
        ],
      },
    ],
  },
];

export default function CertificationPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredCertifications = certifications
    .map((category) => ({
      ...category,
      subcategories: category.subcategories
        .map((subcategory) => ({
          ...subcategory,
          items: subcategory.items.filter(
            (item) =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.code.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((subcategory) => subcategory.items.length > 0),
    }))
    .filter((category) => category.subcategories.length > 0);

  return (
    <div className=" relative flex flex-col md:flex-row h-screen">
    

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={` absolute md:relative z-50 md:z-10 top-0 left-0 h-full bg-gray-50 shadow-md border-r border-gray-200 p-6 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full md:w-72 md:translate-x-0"
        }`}
      >
        {/* Close Button (Mobile) */}
        <button
          className="md:hidden absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X size={20} />
        </button>

        <h2 className="text-xl text-blue-600 font-bold mb-4">Certification Courses</h2>

        <input
          type="text"
          placeholder="Search course or code"
          className="border p-2 w-full mb-4 rounded-md"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <h3 className="text-lg text-blue-600 font-bold mb-2">Categories</h3>
        <ul className="space-y-4">
          <li
            className={`cursor-pointer text-black text-sm font-bold ${!selectedCategory ? "underline" : ""}`}
            onClick={() => {
              setSelectedCategory(null);
              setIsSidebarOpen(false);
            }}
          >
            Show All Certifications
          </li>
          {certifications.map((category) => (
            <li key={category.category}>
              <h4 className="text-md text-blue-600 mb-1">{category.category}</h4>
              <ul className="ml-4 space-y-1">
                {category.subcategories.map((subcategory) => (
                  <li
                    key={subcategory.name}
                    className="text-sm cursor-pointer text-gray-700 hover:text-blue-500"
                    onClick={() => {
                      setSelectedCategory(selectedCategory === subcategory.name ? null : subcategory.name);
                      setIsSidebarOpen(false);
                    }}
                  >
                    {subcategory.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
              {/* Mobile Sidebar Toggle Button */}
              <button
        className="md:hidden p-2 mx-6 my-4 bg-blue-600 text-white rounded-md w-72"
        onClick={() => setIsSidebarOpen(true)}
      >
        {/* <Menu size={24} /> */}
        All Certification Categories
      </button>
      <main className="flex-1 p-6 overflow-y-auto">
        {filteredCertifications.length > 0 ? (
          filteredCertifications.map((category) =>
            category.subcategories.map(
              (subcategory) =>
                (!selectedCategory || selectedCategory === subcategory.name) && (
                  <div key={subcategory.name} className="mb-6">
                    <h2 className="text-lg font-bold text-blue-600">{subcategory.name}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                      {subcategory.items.map((item) => (
                        <div key={item.code} className="border p-4 rounded-lg flex items-center space-x-3 shadow-md bg-white">
                          <img src={item.c_image} alt="Badge" className="w-20 h-20 object-contain" />
                          <div>
                            <h3 className="font-bold">{item.code}</h3>
                            <p className="text-sm text-gray-600">{item.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )
          )
        ) : (
          <p className="text-gray-500">No certifications found.</p>
        )}
      </main>
    </div>
  );
}
