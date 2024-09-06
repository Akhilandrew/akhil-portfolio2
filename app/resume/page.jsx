"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaNodeJs, FaJava, FaGit, FaAngular, FaAmazon } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs} from "react-icons/si";

import React from 'react'

const about ={
  title: 'About me',
  description: "I`m a computer science graduate with skills in software development, cloud computing, and automation. Currently pursuing a Master of Engineering at Virginia Tech, I`m passionate about AI/ML, deep learning, and computer vision, focusing on large language models.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Akhilesh Babu Tumati"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1)571-238-0184"
    },
    {
      fieldName: "Experience",
      fieldValue: "19 Months"
    },
    {
      fieldName: "Email",
      fieldValue: "akhileshbabut24@vt.edu"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Telugu"
    },
  ]
};

const experience ={
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "I have experience in developing automation scripts to improve testing efficiency, enhancing front-end performance with JavaScript and Angular, and implementing CI/CD pipelines. Additionally, I’ve optimized databases and monitored system performance to reduce downtime and improve efficiency",
  items: [
    {
      company: "Honeywell",
      position: "Software Developer",
      duration: "January 2023-July 2023"
    },
    {
      company: "Tata Consultancy Services",
      position: "Systems Engineer",
      duration: "August 2023-August 2024"
    },

  ],
};

const education ={
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "I hold a Bachelor's in Computer Science from Vellore Institute of Technology, where I built a strong foundation in Deep Learning, Web development, Mobile Application Development, Java and Python. Currently, I'm pursuing a Master of Engineering in Computer Science at Virginia Tech, with a focus on Artificial Intelligence and cloud computing.",
  items: [
    {
      institution: "Vellore Institute of Technology",
      degree: "Bachelors of Technology in Computer Science and Engineering",
      duration: "2019-2023"
    },
    {
      institution: "Virginia Polytechnic Institute and State University",
      degree: "Master of Engineering in Computer Science",
      duration: "August 2024-current"
    },

  ],
};

const skills = {
  title: "My skills",
  description: "Here are my skills that i have gained from my work experiences and from my personal projects",
  skillList: [
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaJava />,
      name: "java"
    },
    {
      icon: <FaAngular />,
      name: "angular"
    },
    {
      icon: <FaGit />,
      name: "git"
    }
  
  
  ],

};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import{ 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import{ motion } from "framer-motion";
const Resume = () => {
  return (
  <motion.div initial={{opacity: 0}} 
  animate={{
    opacity: 1, 
    transition: { delay: 2.4, duration:0.4, ease: "easeIn"},
  }}

  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about_me">About me</TabsTrigger>
        </TabsList>
        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item,index)=> {
                    return(
                      <li key={`${item.position}-${index}`} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}  
                </ul> 
              </ScrollArea>
            </div>
          </TabsContent>


          <TabsContent value="education" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{education.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {education.items.map((item, index) => {
          return (
            <li key={`${item.position}-${index}`} className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-full min-h-[60px] text-center lg:text-left">{item.degree}</h3>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.institution}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  </div>
          </TabsContent>

          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                <div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skills,index)=> {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232339] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skills.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="about_me" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>

        </div>
      </Tabs>
    </div>
  </motion.div>
  );
};

export default Resume