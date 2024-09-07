"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import React from 'react'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 571-238-0184"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "akhileshbabut24@vt.edu"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Peach Orchard Drive, Falls Church, Virginia 22043"
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, 
    transition: {delay:1.0, duration:0.4, ease: "easeIn"} 
    }}
    className="py-6"
    >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:h-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let`s Work together</h3>
            <p className="text-white/60">
            I`m passionate about collaborating on projects that drive innovation. Whether it`s developing software, exploring AI and machine learning, or optimizing systems, I`m ready to help bring your ideas to life. Let`s connect and create something impactful!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="Firstname" />
              <Input type="lastname" placeholder="Lastname" />
              <Input type="email" placeholder="Email address" />
              <Input type="phone" placeholder="Phone number" />
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="est">Research & Development</SelectItem>
                  <SelectItem value="cst">Software Development</SelectItem>
                  <SelectItem value="mst">Data Science & Analytics</SelectItem>
                  <SelectItem value="gst">Computer Networks</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </form>
        </div>
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">info</div>
      </div>
    </div>
    </motion.section>
  )
}

export default Contact