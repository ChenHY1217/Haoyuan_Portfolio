'use client';

import React from 'react'
import { Spotlight } from '../ui/Spotlight'
import { TextGenerateEffect } from '../ui/TextGenerateEffect'
import { ShimmerButton } from '../ui/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <section className="h-screen relative flex flex-col items-center justify-center w-full overflow-hidden" id="hero">
      <div>
        <Spotlight className='-top-10 -left-20 h-screen w-[200vw] lg:left-60 lg:-top-20 ' fill="white"/>
        <Spotlight className='lg:block hidden top-10 left-full h-[80vh] w-[50vw]' fill="purple"/>
        <Spotlight className='lg:block hidden top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>

        {/* Grid */}
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03] flex items-center justify-center absolute top-0 left-0 z-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        {/* Content */}
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <motion.h2 
              className='uppercase tracking-widest text-6xl text-center text-blue-100 max-w-100'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Haoyuan Chen
            </motion.h2>

            <TextGenerateEffect 
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words="CS Student | Software Developer | Tech Enthusiast"  
            />
            


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='flex flex-col gap-2 items-center justify-center'
            >
                <div className='flex gap-4'>
                <a href="https://www.linkedin.com/in/haoyuanchen27" target='_blank'>
                  <FaLinkedin size={30} className="hover:scale-110 transition-transform"/>
                </a>

                <a href="https://github.com/ChenHY1217" target='_blank'>
                  <FaGithub size={30} className="hover:scale-110 transition-transform"/>
                </a>
                </div>


              <a href="#experiences">
              <ShimmerButton 
                title="Explore My Work"
                icon={<FaLocationArrow/>}
                position='right'
              />
              </a>
            </motion.div>

          </div>
          
        </div>

      </div>
    </section>
  )
}

export default Hero