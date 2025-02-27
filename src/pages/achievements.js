import React from 'react';

export default function Achievements() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="achievements">
      <div className="text-5xl md:text-6xl text-center md:text-left font-medium text-black-300 pb-4 mb-16">
        Achievements
      </div>
      {experiences.map((exp) => {
        return (
          <div className="w-full shadow-md p-5 rounded-lg mb-10">
            <div className=" grid md:grid-cols-2 gap-4 md:order-2">

              <div className="md:col-span-3 space-y-4  my-auto">
                <div className="text-lg md:text-2xl text-cyan-500 font-bold">{exp.company}</div>
                <div className=" text-black-400 text-sm">
                  {exp.details}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const experiences = [
  {
    
    company: 'Winner of Solveathon',
    details: [
      "A national level hackathon organized by Cognizant, YuWaah and UNICEF"
    ]
    

  },
  {
    
    company: 'Top Team Award at CrowdHacks',
    details: [
      'An international hackathon organized on the Unstop Platform',
    ],
    
  },
  {
    
    company: '1st Runner Up at Mindspark',
    details: [
      "National level hackathon organized by College of Engineering, Pune [COEP]"
    ],
    
  },
  {
    
    company: 'Finalist at Productathon, IIT Roorkee',
    details: [
      "National level hackathon organized by IIT Roorkee"
    ],
    
  },

  {
    
    company: 'Upraised Embark Fellow',
    details: [
      "Finished in the top 1% performers in the Upraised Embark Program which tested the technical and behavioral fitness of students in the Product Based, Analytics and Business Operations category of internships. Total participants: 4.55 lakh"
    ],
    
  }
];
