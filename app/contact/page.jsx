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
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// TODO: Install emailjs-com if you haven't already: npm install emailjs-com
import emailjs from 'emailjs-com';

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
    description: "Peach Orchard Dr, FallsChurch, Virginia 22043"
  },
];

const formSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters"),
  lastname: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Invalid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  // New state variables for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  // Updated onSubmit function to use EmailJS
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS credentials
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${data.firstname} ${data.lastname}`,
          from_email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      console.log(result.text);
      setSubmitStatus('success');
      reset(); // Reset form fields
    } catch (error) {
      console.error(error.text);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's Work together</h3>
              <p className="text-white/60">
                I'm passionate about collaborating on projects that drive innovation. Whether it's developing software, exploring AI and machine learning, or optimizing systems, I'm ready to help bring your ideas to life. Let's connect and create something impactful!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Controller
                    name="firstname"
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="Firstname" />}
                  />
                  {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
                </div>
                <div>
                  <Controller
                    name="lastname"
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="Lastname" />}
                  />
                  {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>}
                </div>
                <div>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input {...field} type="email" placeholder="Email address" />}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="Phone number" />}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
              </div>
              <Controller
                name="service"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                )}
              />
              {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
              <div>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <Textarea {...field} className="h-[200px]" placeholder="Type your message here." />
                  )}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              {/* Updated submit button with loading state */}
              <Button type="submit" size="md" className="max-w-40" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
              {/* New success and error messages */}
              {submitStatus === 'success' && (
                <p className="text-green-500 mt-2">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;