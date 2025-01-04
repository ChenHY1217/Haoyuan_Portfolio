import React from 'react'
import MagicButton from '../ui/MagicButton'
import { FaLocationArrow, FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineFileText } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='h-auto mx-auto max-w-7xl px-5 pb-10 ' id="contact">

            {/* Content */}
            <div className='flex flex-col items-center text-blue-100 pb-10 md:pb-20'>
                <h2 className='font-bold text-4xl md:text-5xl lg:max-w-[45vw]'>
                    Curious about my <span className="text-purple">Journey</span>? 
                </h2>
                <p className='text-center mt-4 text-2xl'>
                Let's <span className="text-purple">Connect</span>!
                </p>
                <a href="mailto:haoyuan@gmail.com">
                    <MagicButton 
                        title='Contact Me'
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            
            <div className='flex mt-16 md:flex-row flex-col items-center justify-between gap-4'>
                <p className='text-blue-100 text-sm md:text-base font-light md:font-normal'>
                    Copyright © 2024 Haoyuan Chen
                </p>
                <div className='flex items-center md:gap-3 gap-6'>
                    <a href="https://www.linkedin.com/in/haoyuanchen27" target='_blank'>
                        <FaLinkedin size={30} className="hover:scale-110 transition-transform"/>
                    </a>
    
                    <a href="https://github.com/ChenHY1217" target='_blank'>
                        <FaGithub size={30} className="hover:scale-110 transition-transform"/>
                    </a>

                    <a href="/HaoyuanChenResume.pdf" target='_blank'>
                        <AiOutlineFileText size={30} className="hover:scale-110 transition-transform"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer