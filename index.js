import React, { useState } from 'react';
import { Download } from 'lucide-react';

const ResumeDownloader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const resumes = [
    {
      name: "Software Engineering Resume",
      path: "/Resumes/Nithish_SE1.pdf",
      type: "Software Engineering"
    },
    {
      name: "Another Resume Variant",
      path: "/Resumes/Nithish_Other.pdf", // Replace with your second resume path
      type: "Alternative Version"
    }
  ];

  return (
    <div className="relative inline-block">
      <button 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
      >
        <Download className="w-5 h-5 mr-2" />
        Download Resume
      </button>

      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {resumes.map((resume, index) => (
              <a
                key={index}
                href={resume.path}
                download
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {resume.type}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeDownloader;