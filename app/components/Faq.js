import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const modules = [
  { title: "Module 1: Modules and Packages", content: "Content for Modules and Packages" },
  { title: "Module 2: Exception", content: "Content for Exception Handling" },
  { title: "Module 3: Strings", content: "Content for Strings" },
  { title: "Module 4: Object Oriented Programming", content: "Content for OOP" },
  { title: "Module 5: Miscellaneous", content: "Miscellaneous topics covered here" },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl px-10 pb-10 pt-7">
      {modules.map((module, index) => (
        <div key={index} className="border rounded-lg mb-2">
          <button
            className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition-all"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium">{module.title}</span>
            <ChevronDown
              className={`transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          <motion.div
            initial={false}
            animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }} // 🔥 Faster speed
            className="overflow-hidden"
          >
            <div className="p-4 text-gray-700">{module.content}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
