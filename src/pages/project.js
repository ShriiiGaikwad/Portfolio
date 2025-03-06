import React from 'react';
import signlang from '../assets/sign.png';
import athlete from '../assets/athelete.png';
import traf from '../assets/traf.png';
import airq from '../assets/airq.jpg';
import tableau from '../assets/tableau.png';
import Secuscan from '../assets/secu.png';

export default function Projects() {
  return (
    <div className=" bg-slate-50 relative overflow-hidden" id="projects">
      <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
        <div className="text-5xl md:text-6xl text-center md:text-left font-medium text-black-300 pb-4 mb-16">
          Projects
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {projects.map((proj) => {
            return (
              <div className="p-4 shadow-md space-y-4 bg-white">
                <div className="h-32 overflow-hidden border-b relative">
                  <img alt="" src={proj.img} className="w-full absolute left-0 my-auto "></img>
                </div>
                <div className="text-2xl text-cyan-500">{proj.title}</div>
                <div className="h-20 overflow-y-auto text-gray-400 font-light text-xs">
                  {proj.details}
                </div>
                <div className="flex justify-end space-x-4 items-center opacity-40">
                  {proj.links.map((link) => {
                    return (
                      <a
                        href={link.link}
                        target={'_blank'}
                        rel="noreferrer"
                        className="h-5 cursor-pointer text-2xl text-gray-500 flex items-center"
                      >
                        {link.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Secuscan",
    details: "A GitHub vulnerability scanner that automates security analysis using a RESTful API, ensuring safer and more secure repositories",
    img: Secuscan,
    links: [
      {
        icon: (
          <img
            alt=""
            //src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        //link: "https://oj-client.vercel.app/"
      },
      {
        icon: <i class="devicon-github-original"></i>,
        link: "https://github.com/ShriiiGaikwad/Secuscan",
      },
    ]
  },
  {
    title: 'Sign Language to Text & Speech Translator',
    details: "A real-time AI-powered system that converts sign language gestures into text and speech, enhancing accessibility for the hearing-impaired.",
    img: signlang,
    links: [
      {
        icon: (
          <img
            alt=""
            //src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        //link: 'https://pcsbxenia.com/',
      },
      {
        icon: <i class="devicon-github-original"></i>,
        link: "https://github.com/ShriiiGaikwad/SignLanguageLearn",
      },
    ],
  },
  {
    title: 'Traffic Accident Detection',
    details:
      'An AI-driven traffic monitoring system that detects accidents in real time and sends automated alerts to emergency responders.',
    img: traf,
    links: [
      {
        icon: (
          <img
            alt=""
            //src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        //link: 'https://rebuild-hub.netlify.app/',
      },
      {
        icon: <i class="devicon-github-original"></i>,
        link: 'https://github.com/ShriiiGaikwad/NHack',
      },
    ],
  },
  {
    title: 'AthleteVerse',
    img: athlete,
    details: "A content-sharing platform for athletes, featuring AI-powered Q&A, blog sentiment analysis, and automated content tagging to boost user engagement.",
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: 'https://verath.vercel.app/',
      },
      {
        icon: <i class="devicon-github-original"></i>,
        link: 'https://github.com/ShriiiGaikwad/CerebralHack',
      },
    ],
  },
  {
    title: 'Air Quality Monitoring System',
    details: 'Developed a Smart Air Quality Monitoring System integrating IoT, cloud computing, and predictive analytics to track and improve air quality in real-time.',
    img: airq,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: 'https://www.ijraset.com/research-paper/smart-air-quality-monitoring-system',
      },
    ],
  },
  {
    title: 'Market Analysis for Strategic Decision',
    details: 'An interactive Tableau dashboard suite that visualizes complex financial data, showcasing skills in data integration, data visualization, and dashboard development.',
    img: tableau,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: 'https://public.tableau.com/app/profile/srigandhrav.gaikwad/viz/MarketAnalysisforStrategicDecision/Dashboard3',
      },
    ],
  },
];

