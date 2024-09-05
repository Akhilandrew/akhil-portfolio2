"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaNodeJs, FaJava, FaGit } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs} from "react-icons/si";

import React from 'react'

const about ={
  title: 'About me',
  description: "",
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
  description: "Education History Starting from my Bachelors Degree",
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
  description: "Here are my skills i have gained from my work experience and from my personal projects",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
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
          <TabsTrigger value="about me">About me</TabsTrigger>
        </TabsList>
        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul>
                  {experience.items.map((item,index)=> {
                    return(
                      <li key={`${item.position}-${index}`}>
                        <span>{item.duration}</span>
                        <h3>{item.position}</h3>
                        <div>
                          <span></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    );
                  })}  
                </ul> 
              </ScrollArea>
            </div>
          </TabsContent>


          <TabsContent value="education" className="w-full">
            education
          </TabsContent>
          <TabsContent value="skills" className="w-full">
            skills
          </TabsContent>
          <TabsContent value="about me" className="w-full">
            about me
          </TabsContent>

        </div>
      </Tabs>
    </div>
  </motion.div>
  );
};

export default Resume