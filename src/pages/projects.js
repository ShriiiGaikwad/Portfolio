import React from 'react';
import CP1 from '../assets/vertexai.jpg';
import CP2 from '../assets/AlgoAnalytics.png';
import CP3 from '../assets/Google.jpg';
import CP4 from '../assets/Briota.jpg';
import CP5 from '../assets/IDBI-Intech.jpg';
import CP6 from '../assets/BobbleAI.jpg';
import CP7 from '../assets/GrowMonks.png';
import CP8 from '../assets/KODEITSolutions.jpg';
import CP9 from '../assets/GirlScriptIndia.jpg';
import CP10 from '../assets/Verzeo.jpg';


export default function Experience() {
  return (
    //<div className=" bg-slate-50 relative overflow-hidden" id="projects">
    <div className=" max-w-6xl mx-auto p-5 py-20" id="projects">
      <div className="text-5xl md:text-6xl text-center md:text-left font-medium text-black-300 pb-4 mb-16">
        Projects
      </div>
      {experiences.map((exp) => {
        return (
          <div className="w-full shadow-md p-5 rounded-lg mb-10">
            <div className=" grid md:grid-cols-2 gap-4 md:order-2">
            {/* <div
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
              </div> */}
              <div className="md:col-span-3 space-y-4 my-auto">
                <div className="text-lg md:text-2xl text-cyan-500 font-bold">{exp.company}</div>
                <div className="md:flex justify-between">
                  <div className="text-l text-gray-500 font-bold">{exp.position}</div>
                  <div className=" text-l text-gray-500">{exp.date}</div>
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
    //</div>
  );
}

const experiences = [
  {
    position: 'Machine Learning, Python, openCV, Keras, MediaPipe',
    company: 'Sign Language to Text & Speech Translator',
    details: [
      "Created a real-time sign language translation system using Keras, OpenCV, and MediaPipe, bridging the gap between the hearing-impaired and non-sign language users.",
      "Integrated a deep learning-based translator supporting 5 languages, making it accessible to a diverse global audience, Translates hand gestures into both text and speech, enhancing communication accessibility."
    ],
    //date: 'February 2024 - March 2024',
    img: CP1,
    companyUrl: "https://github.com/ShriiiGaikwad/Pipeline"

  },
  {
    position: 'Machine Learning, Python, openCV, YOLO',
    company: 'Traffic Accident Detection – Nvidia & Dell Hackathon',
    details: [
      "Developed an AI-powered traffic analysis system using OpenCV and YOLO models to detect road accidents and track parking availability in real-time.",
      "Implemented an automated alert system that sends email and SMS notifications to nearby hospitals and police stations for faster emergency response."
    ],
    //date: 'February 2024 - March 2024',
    img: CP1,
    companyUrl: "https://github.com/ShriiiGaikwad/Pipeline"

  },
  {
    position: 'HTML, CSS, JavaScript, Python, openAI',
    company: 'ATHLETEVERSE - Cerebral Hackathon',
    details: [
      "Built AthleteVerse, a content-sharing platform for athletes where users engage through AI-powered Q&A, blog articles, and automated sentiment analysis and leveraged OpenAI`s GPT-3.5 for Q&A interactions and Hugging Face NLP models for sentiment tagging, enhancing user engagement",
      "Collaborated with industry experts and corporate sponsors, including Twelve Labs and Google, to refine product features and user interface."
    ],
    //date: 'February 2024 - March 2024',
    img: CP1,
    companyUrl: "https://github.com/ShriiiGaikwad/Pipeline"

  },
  {
    position: 'Python, Pandas, Google Cloud Platform (GCP), Vertex AI, ML Pipelines',
    company: 'End-to-end CHD Prediction Pipeline Using Google Cloud AI',
    details: [
      "Designed and implemented an end-to-end data processing and machine learning pipeline on Google Cloud Platform's AI Platform Pipelines, ensuring efficient data handling, feature engineering, model training, and evaluation, achieving a model accuracy of 74.60% and an F1 score of 74.77%"
    ],
    //date: 'February 2024 - March 2024',
    img: CP1,
    companyUrl: "https://github.com/ShriiiGaikwad/Pipeline"

  },
  {
    position: 'Tableau, Data Visuallization, Real-Time data Analysis, Dashboard development, Excel',
    company: 'Market Analysis For Strategic Decision',
    details: [
      "Developed and deployed an interactive Tableau dashboard suite for visualizing complex financial data, showcasing expertise in data integration, visualization, and dashboard development. Leveraged real-time data analysis capabilities to enable sector performance tracking and detailed stock market trend analysis.",
      "Enhanced user experience by redesigning and optimizing a user-centric Tableau dashboard suite, resulting in a 30% increase in efficiency for financial data analysis tasks. Implemented interactive features such as drill-downs and filter options, empowering users to conduct in-depth analysis and make informed investment decisions."
    ],
    //date: 'February 2024 - March 2024',
    //img: CP1,
    companyUrl: "https://public.tableau.com/app/profile/srigandhrav.gaikwad/viz/MarketAnalysisforStrategicDecision/Dashboard3"

  },
  {
    position: 'Go, git, Gitub',
    company: 'DineSwipe',
    details: [
      "Developed a Web App that acts as a platform to offers users a convenient way to discover and select cafe or restaurant options for dining.if two users independently select the same cafe or restaurant option, they are automatically matched"
    ],
    //date: 'October 2023 - November 2023',
    //img: CP1,
    //companyUrl: "https://www.veritas.com/"

  },

  {
    position: 'Python, Rpi, AWS, DynamoDB, RDS, HTML, CSS, ReactJS', 
    company: 'Smart Air Quality Monitoring System',
    details: [
      "Engineered a robust System Design embedding real-time analytics, slashing pollution emergency response time by 50% through refined data structuring and reporting",
      "Architected every integration of software applications into the hardware system, streamlining processes and saving 50+ hours per week in manual data entry",
    ],
    //date: 'August 2021 - May 2022',
    //img: CP2,
    //companyUrl: 'https://www.algoanalytics.com/'
  },
  {
    position: 'Python, NTLK, VADER, Pandas, Numpy Machine Learning',
    company: 'Ukraine Conflict Sentiment Analysis',
    details: [
      "Developed and orchestrated the training of a sentiment analysis model using NLTK in Python, integrating preprocessing techniques for data cleanliness and VADER for effective sentiment classification, showcasing proficiency in Python, NLTK, and data preprocessing.",
      "Utilized the trained sentiment analysis model to analyze over 26 million tweets, providing valuable insights into public opinions on the Ukraine-Russia conflict and guiding future enhancements for multilingual sentiment recognition and global sentiment understanding, demonstrating skills in data analysis, interpretation, and guiding model improvements."
    ],
    //date: 'Apr 2021 - June 2021',
    //img: CP3,
    //companyUrl: "https://about.google/"
  },

  {
    position: 'Machine Learning, Python, Jupyter Notebook',
    company: 'Insurance Cost Prediction',
    details: [
      "Executed data collection and preprocessing activities for an expansive insurance dataset, medical history, and insurance costs, Leading data-driven insights and facilitating effective risk management strategies",
      "Led the project to implement regression models, including Linear Regression and Random Forest, to improve predictive capabilities, leading to a significant 30% increase in customer retention",
    ],
    //date: 'July 2021 - Sept 2021',
    //img: CP2,
    //companyUrl: 'https://www.algoanalytics.com/'
  },
  /*{
    position: 'Flutter, Firebase, Flask, Machine Learning',
    company: 'Smart Radiation Detector',
    details: [
      "This app developed in Flutter accurately calculates the electronic radiation exposure in an individual's day to day life.",
      "The trained Machine Learning model working in the backend also triggers a notification in case the user is about to enter a location which has high radiation exposure."
    ],
    date: 'Apr 2021 - June 2021',
    //img: CP3,
    //companyUrl: "https://about.google/"
  },
  {
    position: 'Flutter, Firebase, Flask, NLP, Machine Learning',
    company: 'Women Safety App',
    details: [
     "This app developed in Flutter makes use of Speech Recognition to detect trigger words such as 'Help' & 'Save Me' and sends a SMS notification to the emergency contacts along with the location coordinates of the user.",
     "Authentication of the user is done through Firebase and a NLP model trained to detect various trigger words runs in the backend.",
     "As the app does not store any data of the audio conversations that it listens to, user privacy is preserved."
    ],
    date: 'Sept 2020 - Nov 2020',
    //img: CP4,
    //companyUrl: "https://www.briota.co/"
  },
  {
    position: 'Blockchain, Solidity, Flutter',
    company: 'Medchain',
    details: [
      "A mobile-based medical records management system based on Blockchain to securely store medical data, facilitate online consultations and enable medical fee payment.",
      "Tested and Deployed on Ethereum Blockchain."
    ],
    date: 'Dec 2021 - Feb 2022',
    //img: CP5,
    //companyUrl: "https://www.idbiintech.com/"

  },
  {
    position: 'Hyperledger, Blockchain, React.js, Flutter',
    company: 'Disaster Management System',
    details: [
      "A web and mobile-based disaster management system to be used by National Defense Response Force (NDRF) making use of private Blockchain."
    ],
    date: 'Mar 2022 - Aug 2022',
    //img: CP6,
    //companyUrl: "https://www.bobble.ai/en/home"

  },*/
  {
    
      position: 'HTML, CSS, Javascript, React.js, Node.js',
      company: 'Portfolio Website',
      details: [
        "The website you are looking at!"
      ],
      // date: 'Sept 2022',
      //img: CP6,
      //companyUrl: "https://www.bobble.ai/en/home"
  
    
    
  }
  
];
