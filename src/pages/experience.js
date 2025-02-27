import React from 'react';
import CP1 from '../assets/eq_technologic.jpg';
// import CP2 from '../assets/AlgoAnalytics.png';
import CP3 from '../assets/openHouse.png';
import CP4 from '../assets/ABS.png';
import CP5 from '/Users/srigandhravgaikwad/Personal_Repo/SG_Portfolio/src/assets/stealth.jpg'
// import CP5 from '../assets/IDBI-Intech.jpg';
// import CP6 from '../assets/BobbleAI.jpg';
// import CP7 from '../assets/GrowMonks.png';
// import CP8 from '../assets/KODEITSolutions.jpg';
// import CP9 from '../assets/GirlScriptIndia.jpg';
// import CP10 from '../assets/Verzeo.jpg';


export default function Experience() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
      <div className="text-5xl md:text-6xl text-center md:text-left font-medium text-black-300 pb-4 mb-16">
        Experience
      </div>
      {experiences.map((exp) => {
        return (
          <div className="w-full shadow-md p-5 rounded-lg mb-10">
            <div className=" grid md:grid-cols-4 gap-4 md:order-2">
              <div
                className="w-full h-40 flex items-center justify-center my-auto hover:scale-105 transform transition ease-in cursor-pointer"
                onClick={() => window.open(exp.companyUrl || window.location, '_blank')}
              >
                <img
                  className="max-h-full max-w-full rounded-md"
                  src={
                    exp.img ||
                    'https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png'
                  }
                  alt=""
                ></img>
              </div>
              <div className="md:col-span-3 space-y-4 my-auto">
                <div className="text-lg md:text-2xl text-cyan-500 font-bold">{exp.company}</div>
                <div className="md:flex justify-between">
                  <div className="text-xl text-gray-500 font-bold ">{exp.position}</div>
                  <div className=" text-gray-500 font-bold">{exp.date}</div>
                </div>
                <div className=" text-black-400 text-sm">
                  <ul className="list-disc">
                    {exp.details.map((detail) => (
                      <li>{detail}</li>
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

const experiences = [
  {
    position: 'Software Development Engineer- Intern',
    company: 'Stealth Startup',
    details: [
      "Developed and deployed ML models to match customer orders with the most suitable vendors, leveraging deep learning for real-time predictions of vendor acceptance and total cost estimation, resulting in a 25% faster vendor confirmation rate and a 20% reduction in order processing time",
      "Integrated linear programming and nonlinear optimization into vendor selection workflows, reducing mismatches by 30% and improving overall order success rates.",
      "Implemented relational databases (e.g., MySQL/PostgreSQL) for transaction data storage, optimizing queries and reducing ETL process times by 15%"
    ],
    date: 'May 2024 - Present',
    img: CP5,
    //companyUrl: 'https://www.algoanalytics.com/'
  },
  {
    position: 'Quality Assurance Engineer',
    company: 'eQ Technologic Pvt. Ltd.',
    details: [
      "Conducted comprehensive regression testing on new features and updates, ensuring zero negative impact on existing functionalities; reduced post-release bugs by 40% and improved overall product stability",
      "Incorporated Redmine productively to pinpoint and document software defects, collaborating across teams and contributing to a 40% reduction in bugs, coupled with a 20% enhancement in process efficiency"
    ],
    date: 'August 2022 - June 2023',
    img: CP1,
    companyUrl: "https://www.1eq.com/"

  },
 /* {
    position: 'Machine Learning & Cloud Engineer',
    company: 'Algo Analytics',
    details: [
      "Working to set up a complete Machine Learning Foundation on Azure with CI/CD pipelines and end to end development environment along with DevOps using Azure to host internally developed SaaS products and perform customer centric development in a secure cloud environment."
    ],
    date: 'Aug 2022 - Present',
    img: CP2,
    companyUrl: 'https://www.algoanalytics.com/'
  },*/
    {
    position: 'Software Development Engineer - Intern',
    company: 'ABS Certifications (TUV AUSTRIA Partner)',
    details: [
     "Worked on end-to-end development and deployment of an object detection model, encompassing data cleaning, annotation, model training, and hyper-parameter tuning to achieve optimal performance on a dataset of 10,000 images",
     "Developed a YOLO v5 model to track individual chickens and analyze their feeding behaviors, undertaking testing and optimization to ensure high accuracy and reliable results in improving health conditions of livestock" 
    ],
    date: 'September 2021 - July 2022',
    img: CP4,
    companyUrl: "https://en.tuv.at/"
  },
  /*{
    position: 'Software Engineer Intern',
    company: 'IDBI Intech Ltd.',
    details: [
      "Performed customer sentiment analysis by making use of Natural Language Processing techniques to improve Digital Banking Technology of IDBI Bank.",
      "Performed Expense Behavior Analytics to analyze the likelihood of a current or prospective customer to opt for the various Banking and loan services offered by the Bank. The analytics was performed based on the customer data that was available (from cookies, emails, text messages, customer enquiries with the bank etc.). ",
      "Worked on developing and updating existing API services to facilitate faster payment integration for clients of IDBI Bank which include FMCG, BFSI, MSME and E-Commerce companies.",
      "Through the Payment API’s, the clients can now get access to various payment modes like NEFT, RTGS, IMPS and UPI for vendor payments and salary compensation"
  
    ],
    date: 'July 2021 - December 2021',
    img: CP5,
    companyUrl: "https://www.idbiintech.com/"

  },*/
  /*{
    position: 'Machine Learning Engineer Intern',
    company: 'Bobble AI',
    details: [
      "Part of Bobble Keyboard and Mint Keyboard teams (in collaboration with Xiaomi).",
      "Successfully implemented and delivered Text Suggestion and Gender Prediction model using Deep Learning and Natural Language Processing. Perfomed extensive Exploratory Data Analysis.",
      
    ],
    date: 'April 2021 - June 2021',
    img: CP6,
    companyUrl: "https://www.bobble.ai/en/home"

  },*/
  {
    position: 'Engineering Intern',
    company: 'openHouse',
    details: [
      "Collaborated with a multidisciplinary team to develop 70% of a feature-rich online education platform catering to teachers and students, leveraging a diverse technology stack",
      "Enhance 25% of database management using MySQL, PostgreSQL, MongoDB, and Firebase, implementing data models, optimizing queries, and ensuring seamless data retrieval and storage"
    ],
    date: 'March 2021 - April 2021',
    img: CP3,
    companyUrl: "https://openhouse.study/"
  },
  /*{
    position: 'Software Developer & Managing Head',
    company: 'Grow Monks',
    details: [
      "It is a freelancing agency that undertakes projects on Web, Mobile App Development and AI-ML from national and international clients at much lower cost than the competition.",
      "The company is run by two of my batchmates and myself, my responsibilites are managing the software development process and working on developing Mobile App and AI-ML projects."
    ],
    date: 'Jan 2022 - June 2023',
    img: CP7,
    companyUrl: "https://www.growmonks.in/"

  },*/
  /*{
    position: 'Operations & Technical Lead',
    company: 'KODE IT Solutions',
    details: [
      "The company is incubated under the Startup and Innovation Cell of Pune Institute of Computer Technology.",
      "Worked as the technical lead for Machine Learning and Mobile App Development Projects.",
      "Also worked as the Managing Head of all the teams working under the company."
    ],
    date: 'Aug 2021 - Nov 2021',
    img: CP8,
    //companyUrl: ""

  },*/

  /*{
    position: 'Machine Learning Intern',
    company: 'Girlscript India',
    details: [
      "Implemented and deployed numerous Data Science projects using Machine Learning models and Python libraries like pandas, numpy, matplotlib, seaborn, sklearn, keras, flask and streamlit."
    ],
    date: 'Jan 2021 - March 2021',
    img: CP9,
    companyUrl: "https://www.girlscript.tech/home"

  },*/

  /*{
    position: 'Machine Learning Intern',
    company: 'Verzeo',
    details: [
      "Worked on two major projects.",
      "Face mask detection using Keras and Tensorflow.",
      "Speech to text and text to speech conversion."
    ],
    date: 'Dec 2019 - Feb 2020',
    img: CP10,
    companyUrl: "https://verzeo.com/"

  }*/
];
