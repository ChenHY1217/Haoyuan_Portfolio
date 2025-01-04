import React from 'react'
import { motion } from 'motion/react'
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards'
import {
    SiMongodb, SiCplusplus, SiReact, 
    SiTailwindcss, SiExpress, SiNodedotjs, SiTypescript, SiPython
 } from 'react-icons/si';

const TechStack = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-black-100 overflow-hidden'>
            <motion.div 
                className='text-left py-5 font-bold text-2xl text-blue-100'
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}

            >
                <h1>My <span className='text-purple'>Tech Stack</span></h1>
            </motion.div>

            <div className='flex flex-col items-center'>
                <div
                className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
                >
                    <InfiniteMovingCards
                        items={TechStackItems}
                        direction='right'
                        speed='normal'
                    />
                </div>
            </div>
        </div>
    )
}

export default TechStack

const TechStackItems = [
    {icon: <SiReact size={45}/>, title: 'React'},
    {icon: <SiTailwindcss size={45} />, title: 'Tailwind CSS'},
    {icon: <SiNodedotjs size={45}/>, title: 'Node.js'},
    {icon: <SiExpress size={45}/>, title: 'Express.js'},
    {icon: <SiMongodb size={45}/>, title: 'MongoDB'},
    {icon: <SiTypescript size={45}/>, title: 'TypeScript'},
    {icon: <SiCplusplus size={45}/>, title: 'C++'},
    {icon: <SiPython size={45}/>, title: 'Python'},
];