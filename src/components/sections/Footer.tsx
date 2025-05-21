import React from 'react'
import MagicButton from '../ui/MagicButton'
import { FaLocationArrow, FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineFileText } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="h-auto mx-auto max-w-7xl px-5 pb-10 flex flex-col items-center justify-center" id="contact">
            {/* Content */}
            <div className="flex flex-col items-center text-center text-blue-100 pb-10 md:pb-20 w-full">
                <h2 className="font-bold text-4xl md:text-5xl lg:max-w-[45vw] w-full text-center">
                    Curious about my <span className="text-purple">Journey</span>?
                </h2>
                <p className="text-center mt-4 text-2xl w-full">
                    Let&apos;s <span className="text-purple">Connect</span>!
                </p>
                <a href="mailto:haoyuan@gmail.com" className="flex justify-center w-full mt-4">
                    <MagicButton
                    title="Contact Me"
                    icon={<FaLocationArrow />}
                    position="right"
                    />
                </a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mt-16">
                <p className="text-blue-100 text-sm md:text-base font-light md:font-normal text-center w-full md:w-auto">
                    Copyright © 2025 Haoyuan Chen
                </p>
                <div className="flex items-center gap-6 md:gap-3 justify-center w-full md:w-auto">
                    <a href="https://www.linkedin.com/in/haoyuanchen27" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} className="hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://github.com/ChenHY1217" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} className="hover:scale-110 transition-transform" />
                    </a>
                    <a href="/HaoyuanChenResume.pdf" target="_blank" rel="noopener noreferrer">
                    <AiOutlineFileText size={30} className="hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer