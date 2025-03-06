import React from 'react';
import ProfilePic from '../assets/MainPhoto.jpg';
// import ProfilePic1 from '../assets/profilepic1.jpeg';
import ProfilePic1 from '../assets/Sri.png';
// import ResumeFile from '../assets/Vedant_Daigavane_Resume.pdf';

export default function About() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="about">
      <div className="text-5xl md:text-6xl text-center md:text-left font-medium text-black-300 pb-4 mb-16">
        About Me
      </div>

      <div className="md:flex items-center space-y-6 md:space-y-0">
        <div className="md:order-last basis-1/3 h-full">
          <img src={ProfilePic1} className="rounded-full h-52 w-52 mx-auto" alt=""></img>
        </div>
        <div className="basis-2/3 space-y-4">
          <span className="text-black-500 text-xl font-bold">Hi, I am </span>
          <div className="text-cyan-500 text-4xl font-bold">Shri</div>
          <div className="text-xl text-black-500 font-bold">Graduate Student & Software Engineer</div>
          <div className="text-l text-black-500 font-bold">
            
          </div>
          <div className="font-light text-black-400">
          I am a Software Development Engineer passionate about solving real-world problems through scalable applications, AI-driven automation, and cloud infrastructure. With expertise in Python, C++, Go, and SQL, I build high-performance backend systems, optimize CI/CD pipelines using AWS, Google Cloud, and Docker, and implement ML solutions like recommendation engines and computer vision automation. Currently at a stealth startup, I focus on driving innovation, ensuring data integrity, and leveraging AI to create impactful solutions.

          Breaking production so you don`t have to—just kidding, I fix things before they break!
          </div>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="py-10 flex items-center space-x-4 justify-center">
          {social.map((link) => {
            return (
              <a
                href={link.link}
                target={'_blank'}
                rel="noreferrer"
                className="relative rounded-full"
              >
                <img src={link.icon} className="h-10 w-10" alt=""></img>
              </a>
            );
          })}
        </div>
        <a
          className="p-2 cursor-pointer rounded-lg relative px-10 w-max flex items-center m-auto space-x-4 border bg-slate-200"
          href={'https://drive.google.com/file/d/1fbTVpmZh_klB91ffGSBkUmfjFrqTDuLA/view?usp=sharing'}
          target={'_blanck'}
          rel="noreferrer"
        >
          <div>Resume</div>
          <img
            className="h-6 w-6"
            src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
            alt=""
          ></img>
        </a>
      </div>
    </div>
  );
}

const social = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    link: 'https://www.linkedin.com/in/sgaikwad99/',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    link: 'https://github.com/ShriiiGaikwad',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    link: 'mailto: ssgaikwa@usc.edu',
  },
];
