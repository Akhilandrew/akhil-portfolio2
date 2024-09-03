"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link"
import React from 'react'
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'A small functional person-to-person message center application built using Django. It has a REST API and uses WebSockets to notify clients of new messages and avoid polling.',
    href: ""
  },
  {
    num: '02',
    title: 'ClaDeMuC-CD',
    description: 'It`s a conference paper which got published in IEEE Xplore edition. Research is based on the analysis of comparison between conventional CCN`s, Vision transformer and Object Detection models like YoLO_v5 and detectron_v3',
    href: "https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=Akhilesh%20Babu%20Tumati"
  },
  {
    num: '03',
    title: 'Web Development',
    description: 'A small functional person-to-person message center application built using Django. It has a REST API and uses WebSockets to notify clients of new messages and avoid polling.',
    href: ""
  },
  {
    num: '04',
    title: 'Web Development',
    description: 'A small functional person-to-person message center application built using Django. It has a REST API and uses WebSockets to notify clients of new messages and avoid polling.',
    href: ""
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return ( 
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col justify-between bg-black/20 rounded-lg p-6 h-[400px] group"
              variants={itemVariants}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-300">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-2xl text-primary transition-colors duration-300" />
                  </Link>
                </div>
                <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300">{service.title}</h2>
                <p className="text-white/60 overflow-y-auto max-h-[180px] mb-4">{service.description}</p>
              </div>
              <div className="border-b border-white/20 w-full mt-auto"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;