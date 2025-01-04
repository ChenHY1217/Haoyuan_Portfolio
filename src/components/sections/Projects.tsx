"use client";
import React from 'react'
import { motion } from 'motion/react'
import { projects } from '../../data/index'
import { PinContainer } from '../ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';
import bg from '../../../public/bg.png'
import Image from 'next/image'

const Projects = () => {
    return (
        <section className='min-h-screen mx-auto max-w-7xl px-5 overflow-hidden' id='projects'>

            <motion.div 
                className='flex justify-center'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
            >
                <h2 className='heading'> Recent Projects </h2>
            </motion.div>

            <div className='flex flex-wrap md:flex-row items-center justify-center p-4 gap-y-8 gap-x-24 my-10'>
                {projects.map(({ id, title, des, img, iconLists, link}) => (
                    <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <Image src={bg} alt="bg-img"/>
                                </div>
                                <Image
                                    src={img}
                                    alt={title}
                                    fill={true}
                                    objectFit="contain"
                                    className='z-10 absolute bottom-0'
                                />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-blue-100 pb-2'>
                                {title}
                            </h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-blue-100'>
                                {des}
                            </p>

                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon, idx) => (
                                        <div key={icon} 
                                            className='border boder-bleu-100/[0.2] flex justify-center items-center rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 ' 
                                            style={{
                                                transform: `translateX(-${5 * idx * 2}px)`}}>
                                            <img src={icon} alt={icon} className='p-2'/>
                                        </div>   
                                    ))}
                                </div>

                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm'>Live Site</p>
                                    <FaLocationArrow className='ms-3' color='#CBACF9'/>
                                </div>
                                
                            </div>
                        </PinContainer>
                    </div>   
                ))}
            </div>
        </section>
    )
}

export default Projects