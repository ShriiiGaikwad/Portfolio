import React from 'react';

export default function Extracurriculars() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="extracurriculars">
      <div className="text-5xl md:text-6xl text-center md:text-left font-medium text-black-300 pb-4 mb-16">
        Extracurriculars
      </div>
      {experiences.map((exp) => {
        return (
          <div className="w-full shadow-md p-5 rounded-lg mb-10">
            <div className=" grid md:grid-cols-2 gap-4 md:order-2">
              
              <div className="md:col-span-3 space-y-4 my-auto">
                <div className="text-lg md:text-2xl text-cyan-500 font-bold">{exp.company}</div>
                <div className="md:flex justify-between">
                  <div className="text-xl text-gray-500">{exp.position}</div>
                  <div className=" text-gray-400">{exp.date}</div>
                </div>
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
    position: 'Overall Coordinator (Sept 2020 - June 2021)',
    company: 'PICT CSI Student Branch',
    details: [
      "PICT CSI Student Branch is the student chapter of the prestigious Computer Society of India in Pune Institute of Computer Technology with more than 1,100 student members."
    ],
    //date: 'Jan 2022 - Present',
    

  },
  {
    position: 'Event Team Head',
    company: 'Impetus & Concepts (INC), 2020',
    details: [
      "INC is the biggest annual Technical festival organized by the Pune Institute of Computer Technology"
    ],
    //date: 'Nov 21 - Jan 22',
    //img: '',
  },


  {
    //position: 'Full Stack Developer Intern',
    company: 'College Cricket Team',
    details: [
      "Right Arm Fast Bowler in cricket team of Pune Institute of Computer Technology and have participated in various district, state and national-level tournaments. "
    ],
    //date: 'Aug 21 - Oct 21',
    //img: 'https://media-exp1.licdn.com/dms/image/C4E0BAQFOaII-vKob5Q/company-logo_200_200/0/1638201461455?e=1661990400&v=beta&t=nLDkxLlDXDgjwiu-z7PeIg1oKB1YCIcnzIeZDvW7dNk',
    //companyUrl: "http://www.sorceotech.com/"
  },
  {
    //position: 'Full Stack Developer Intern',
    company: 'National Children Science Congress Science Exhibition',
    details: [
      "Pre-State Level winner for topic - Impact on Weather & Climate due to Human Factors."
    ],


    //date: 'Aug 21 - Oct 21',
    //img: 'https://media-exp1.licdn.com/dms/image/C4E0BAQFOaII-vKob5Q/company-logo_200_200/0/1638201461455?e=1661990400&v=beta&t=nLDkxLlDXDgjwiu-z7PeIg1oKB1YCIcnzIeZDvW7dNk',
    //companyUrl: "http://www.sorceotech.com/"
  },
  {
    //position: 'Full Stack Developer Intern',
    company: 'Public speaking',
    details: [
      "Hosted and conducted various technical and non-technical workshops and seminars for students of Pune Institute of Computer Technology."
    ],

    
    //date: 'Aug 21 - Oct 21',
    //img: 'https://media-exp1.licdn.com/dms/image/C4E0BAQFOaII-vKob5Q/company-logo_200_200/0/1638201461455?e=1661990400&v=beta&t=nLDkxLlDXDgjwiu-z7PeIg1oKB1YCIcnzIeZDvW7dNk',
    //companyUrl: "http://www.sorceotech.com/"
  },
  {
    //position: 'Full Stack Developer Intern',
    company: 'Community Service',
    details: [
      "Have worked with various NGO's and social welfare organizations to help underprivileged students receive the right guidance and sufficient resources to pursue higher education. Conducted lectures on High School Mathematics, Physics, and Chemistry for underprivileged students. Have been a part of various donation drives aimed at providing basic necessities like food, clean drinking water and clothes to the less privileged sections of society."
    ],

    
    //date: 'Aug 21 - Oct 21',
    //img: 'https://media-exp1.licdn.com/dms/image/C4E0BAQFOaII-vKob5Q/company-logo_200_200/0/1638201461455?e=1661990400&v=beta&t=nLDkxLlDXDgjwiu-z7PeIg1oKB1YCIcnzIeZDvW7dNk',
    //companyUrl: "http://www.sorceotech.com/"
  }
];
