"use client";

import React from 'react'
import Image from 'next/image'
import rpi from '../../../public/rpi-logo.jpeg'
import rcos from '../../../public/rcos-logo.png'
import { Timeline } from '../ui/Timeline'
import { motion } from 'framer-motion'

const Experiences = () => {
  return (
    <section className='min-h-screen mx-auto max-w-7xl px-5' id='experiences'>
        <motion.div 
          className='flex justify-center'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h2 className='heading'> Experiences </h2>
        </motion.div>
        <div className='w-full relative'>
          <Timeline  data={WorkExperience}/>
        </div>
    </section>
  )
}

export default Experiences

const WorkExperience = [
  {
    title: "Spring 2025",
    content: (
      <div>
        <h3 className="text-xl font-bold text-blue-100 mb-8 uppercase">Undergraduate Teaching Assistant</h3>
        <ul className='text-normal font-normal text-neutral-800 dark:text-neutral-200 mb-8 gap-4 list-disc'>
          <li className="">
          Undergraduate Teaching Assistant for Principles of Software in Java course for over 300+ students 
          </li>
          <li>
          Increased student exam scores by 15% by actively responding to inquiries from students and improving their 
          understanding
          </li>
          <li>
          Facilitated weekly lab periods of 30+ students, along with other TAs, to reinforce concepts taught in lectures
          </li>
          <li>
            Graded 100+ students’ homework and exams while ensuring fair and consistent evaluation
          </li>
          <li>
          Attended weekly TA training workshops to enhance teaching and leadership ability
          </li>
        </ul>
        <Image 
          src={rpi} 
          alt="rpi"
          className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-20 md:w-44 lg:w-60 mx-5 shadow-md shadow-slate-700 hover:scale-105 transition-transform duration-500 ease-in-out'
        />
      </div>
    ),
  },
  {
    title: "Spring 2024",
    content: (
      <div>
        <h3 className="text-xl font-bold text-blue-100 mb-8 uppercase">Backend Technical Co-Lead</h3>
        <ul className='text-normal font-normal text-neutral-800 dark:text-neutral-200 mb-8 gap-4 list-disc'>
          <li>
            Co-led a group of aspiring programmers to support local robotics teams who lack coding experience.
          </li>
          <li>
            Constructed Computer Vision code using Python and OpenCV to help the robot recognize its precise location through on-field  Apriltags
          </li>
          <li>
            Constructed &quot;build-world&quot; functions that update location data to all existing tags, boosting navigation acurracy and speed by 25%.
          </li>
        </ul>
        <Image 
          src={rcos} 
          alt="rcos"
          className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-auto mx-5 shadow-md shadow-slate-700 hover:scale-105 transition-transform duration-500 ease-in-out py-4'
        />
      </div>
    )
  }
]