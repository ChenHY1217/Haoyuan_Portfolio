'use client';

import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import pfp from '../../../public/profile-pic.jpg'
import rpi from '../../../public/rpi-logo.jpeg'
import { HoverBorderGradient } from '../ui/HoverBorderGradient';
import TechStack from '../ui/TechStack';

const About: React.FC = () => {
  return (
    <section className='h-auto md:h-screen mx-auto max-w-7xl px-5' id='about'>
      {/* About Me */}
      <motion.div 
        className='flex justify-center'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        >
        <h2 className='heading'> About Me </h2>
      </motion.div>

      <motion.div 
        className='flex flex-col md:flex-row gap-10 md:gap-20 justify-center md:items-center pt-10 md:pt-20'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {/* Profile Section */}
        <HoverBorderGradient
          containerClassName='rounded-xl border-2 hover:scale-105 transition-transform duration-500 ease-in-out'
          className='grid grid-flow-col items-center  w-full p-4'
          as='div'
        >        
            <Image src={pfp} alt='Profile Picture' className='rounded-md w-full ' />
            
            <div className='flex flex-wrap justify-center md:justify-start mx-10'>
              <h2 className='text-2xl font-bold text-center md:text-left'>
                <span className='text-purple'>CS</span> | <span className='text-purple'>MATH</span> @ <span className='italic'>Rensselaer Polytechnic Institute</span>
              </h2>
              <Image
                src={rpi}
                alt='Rensselaer Polytechnic Institute'
                className='rounded-full hidden w-20 h-20 md:block mt-5'
                style={{ objectFit: 'contain' }}
              />
              <ul className='text-center md:text-left my-5'>
                <li>Graduation Date: <span className="font-bold">December 2025</span></li>
                <li>GPA: <span className="font-bold">3.92</span></li>
                <li>You can call me <span className='text-purple font-bold'>Hao</span> </li>
                <li>pronounced like &quot;How&quot; 😅</li>
              </ul>
            </div>
          

        </HoverBorderGradient>
        

        {/* Summary Section */}
        <div className='md:w-full p-4'>
          <h2 className='text-2xl font-bold mb-4'>About Me</h2>
          <p className='text-lg'>
            Hi, my name is <span className="text-purple">Haoyuan Chen</span>. I am a <span className="text-purple">junior</span> at <span className="text-purple">Rensselaer Polytechnic Institute</span> studying <span className="text-purple">Computer Science and Mathematics</span>. I am passionate about software development and I am always looking for new opportunities to learn and grow.
          </p>
          <p className='text-lg mt-4'>
            Currently, I am working as a <span className="text-purple">Undergraduate Computer Science TA</span> at RPI while actively expanding my tech stack. I have experience in <span className="text-purple">Full-Stack Development</span> and would love to work on impactful projects that make a difference in the world.
          </p>
          <p className='text-lg mt-4 underline underline-offset-4'>
            I am seeking a summer internship for 2025 in software engineering or full-stack web development. 
          </p>
        </div>
      </motion.div>

      {/* Rotating Gallery of Tech Stack */}
      <TechStack />
      
      
    </section>
  )
}

export default About