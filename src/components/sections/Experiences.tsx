"use client";

import React from 'react'
import Image from 'next/image'
import rpi from '../../../public/rpi-logo.jpeg'
import rcos from '../../../public/rcos-logo.png'
import harp from '../../../public/harpresearch.jpg'
import yomitomo from '../../../public/projectpics/yomitomo.png'
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
    title: "Summer 2025",
    content: (
      <div className='flex flex-col items-center gap-10'>
        {/* Summer 2025 Software Engineering Internship */}
        <div>
          <h3 className="text-xl font-bold text-blue-100 mb-8 uppercase">HARP Research - Software Engineering Intern</h3>
          <ul className='text-normal font-normal text-neutral-800 dark:text-neutral-200 mb-8 gap-4 list-disc'>
            <li className="">
              Full-Stack Software Engineering Intern for <span className="text-purple">HARP Research Inc.</span>
            </li>
            <li>
              Collaborated in the a team to create a <span className="text-purple">medical imaging workflow management system</span> that integrates with existing PACS (Picture Archiving and Communication System).
            </li>
            <li>
              Architected a full-stack system involving a <span className="text-purple">Chrome extension frontend, Express backend, and PostgreSQL database.</span>
            </li>
            <li>
              Built <span className="text-purple">containerized microservices architecture</span> with <span className="text-purple">Docker Compose</span>, orchestrating multiple services including a dual-database setup (operational and demonstration databases).
            </li>
          </ul>
          <Image
            src={harp}
            alt="HARP Research"
            className='rounded-lg object-cover h-full w-full mx-2 shadow-md shadow-slate-700 hover:scale-105 transition-transform duration-500 ease-in-out'
          />
        </div>
        {/* Undergraduate Instructional Assistant */}
        <div>
        <h3 className="text-xl font-bold text-blue-100 mb-8 uppercase">Undergraduate Instructional Assistant</h3>
        <ul className='text-normal font-normal text-neutral-800 dark:text-neutral-200 mb-8 gap-4 list-disc'>
          <li className="">
            Undergraduate Instructional Assistant for <span className="text-purple">Introduction to Artificial Intelligence</span> course for 50+ students at RPI
          </li>
          <li>
            Increased student exam scores by 10% by actively responding to inquiries from students and improving their 
            understanding
          </li>
          <li>
            Proctored exams and quizzes for 50+ students, ensuring a fair and secure testing environment
          </li>
          <li>
            Graded 50+ students&apos; homework and exams while ensuring fair and consistent evaluation
          </li>
          <li>
            Hosted weekly office hours to assist students with course material and assignments
          </li>
        </ul>
        <Image 
          src={rpi} 
          alt="rpi"
          className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-20 md:w-44 lg:w-60 mx-2 shadow-md shadow-slate-700 hover:scale-105 transition-transform duration-500 ease-in-out'
        />
      </div>
      </div>
    ),
  },
  {
    title: "Spring 2025",
    content: (
      <div className='flex flex-col items-center gap-10'>
        {/* Undergraduate Programming Mentor */}
        <div>
          <h3 className="text-xl font-bold text-blue-100 mb-8 uppercase">Undergraduate Programming Mentor</h3>
          <ul className='text-normal font-normal text-neutral-800 dark:text-neutral-200 mb-8 gap-4 list-disc'>
            <li className="">
            Undergraduate Teaching Assistant for <span className="text-purple">Principles of Software</span> in Java course for over 300+ students at RPI
            </li>
            <li>
            Increased student exam scores by 15% by actively responding to inquiries from students and improving their
            understanding
            </li>
            <li>
            Facilitated weekly lab periods of 30+ students, along with other TAs, to reinforce concepts taught in lectures
            </li>
            <li>
              Graded 100+ students&apos; homework and exams while ensuring fair and consistent evaluation
            </li>
            <li>
            Attended weekly TA training workshops to enhance teaching and leadership ability
            </li>
          </ul>
          <Image
            src={rpi}
            alt="rpi"
            className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-20 md:w-44 lg:w-60 mx-2 shadow-md shadow-slate-700 hover:scale-105 transition-transform duration-500 ease-in-out'
          />
        </div>        
        {/* RCOS Spring 2025 Yomitomo */}
        <div> 
          <h3 className="text-xl font-bold text-blue-100 mb-8 uppercase">Open Source Developer - Project Lead</h3>
          <ul className='text-normal font-normal text-neutral-800 dark:text-neutral-200 mb-8 gap-4 list-disc'>
            <li>
              Led a team of developers to create <span className="text-purple">Yomitomo</span> (読み友), a Chrome extension for contextual language translation and learning
            </li>
            <li>
              Implemented real-time text selection and translation features using React, TypeScript, and Framer Motion for a smooth user experience
            </li>
            <li>
              Built an AI-powered chat system by integrating with OpenAI&apos;s API through a Node.js/Express backend server
            </li>
            <li>
              Developed a responsive chat interface allowing users to interact with the AI about selected foreign language text
            </li>
            <li>
              Created a Chrome Extension architecture that injects overlay components into web pages while maintaining consistent styling
            </li>
          </ul>
          <Image
            src={yomitomo}
            alt="yomitomo chrome extension"
            className='rounded-lg object-cover h-full w-full mx-2 shadow-md shadow-slate-700 hover:scale-105 transition-transform duration-500 ease-in-out mb-6'
          />
          <Image 
          src={rcos} 
          alt="rcos"
          className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-auto mx-2 shadow-md shadow-slate-700 hover:scale-105 transition-transform duration-500 ease-in-out py-4'
          />
        </div>
      </div>
    ),
  },
  {
    title: "Spring 2024",
    content: (
      <div>
        <h3 className="text-xl font-bold text-blue-100 mb-8 uppercase">Open Source Developer - Backend Technical Co-Lead</h3>
        <ul className='text-normal font-normal text-neutral-800 dark:text-neutral-200 mb-8 gap-4 list-disc'>
          <li>
            Co-led a group of aspiring programmers to support local robotics teams who lack coding experience.
          </li>
          <li>
            Developed Computer Vision code using Python and OpenCV to help the robot recognize its precise location through on-field  Apriltags
          </li>
          <li>
            Constructed &quot;build-world&quot; functions that update location data to all existing tags, boosting navigation acurracy and speed by 25%.
          </li>
        </ul>
        <Image 
          src={rcos} 
          alt="rcos"
          className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-auto mx-2 shadow-md shadow-slate-700 hover:scale-105 transition-transform duration-500 ease-in-out py-4'
        />
      </div>
    )
  }
]