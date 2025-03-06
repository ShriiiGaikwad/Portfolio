import React from 'react';
import USCLogo from '../assets/usc.png'; 
import PICTLogo from '../assets/pict.jpg'; 

export default function Education() {
  return (
    <div className="max-w-6xl mx-auto p-5 py-20" id="education">
      <div className="text-5xl md:text-6xl text-center md:text-left font-medium text-black-300 pb-4 mb-16">
        Education
      </div>
      {educationData.map((edu) => {
        return (
          <div className="w-full shadow-md p-5 rounded-lg mb-10">
            <div className="grid md:grid-cols-4 gap-4 md:order-2">
              {/* University Logo - Clickable */}
              <div
                className="w-full h-40 flex items-center justify-center my-auto hover:scale-105 transform transition ease-in cursor-pointer"
                onClick={() => window.open(edu.universityUrl || window.location, '_blank')}
              >
                <img
                  className="max-h-full max-w-full rounded-md"
                  src={edu.logo}
                  alt={edu.university}
                />
              </div>

              {/* Education Details */}
              <div className="md:col-span-3 space-y-4 my-auto">
                <div className="text-lg md:text-2xl text-cyan-500 font-bold">{edu.university}</div>
                <div className="md:flex justify-between">
                  <div className="text-xl text-gray-500 font-bold ">{edu.degree}</div>
                  <div className="text-gray-500 font-bold whitespace-nowrap">{edu.duration}</div>
                </div>
                <div className="text-black-400 text-sm">
                  <ul className="list-disc">
                    {edu.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Education Data
const educationData = [
  {
    degree: 'Master of Science in Analytics (Data Science)',
    university: 'University of Southern California',
    duration: 'Aug 2023 - Current',
    details: [
      "Coursework in Data Science, Machine Learning, and AI.",
      "Hands-on projects in big data analytics and cloud computing."
    ],
    logo: USCLogo,
    universityUrl: 'https://www.usc.edu/',
  },
  {
    degree: 'Bachelor of Engineering, Electronics and Telecommunications',
    university: 'Pune Institute of Computer Technology',
    duration: 'Aug 2018 - Jun 2022',
    details: [
      "Focused on embedded systems, communication networks, and AI.",
      "Final year project : Air Quality Monitoring System."
    ],
    logo: PICTLogo,
    universityUrl: 'https://pict.edu/',
  },
];

