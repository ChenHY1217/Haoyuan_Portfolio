import React from 'react'
import { JSX } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experiences from '@/components/sections/Experiences'
import Projects from '@/components/sections/Projects'
import Footer from '@/components/sections/Footer'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { HiHome, HiUser, HiBriefcase, HiFolderOpen, HiMail } from 'react-icons/hi';

type NavbarItem = {
  name: string,
  link: string,
  icon: JSX.Element
};

type NavbarItemType = NavbarItem[];

const NavbarItems : NavbarItemType = [
  { name: 'Home', link: '#hero', icon: <HiHome size={25}/> },
  { name: 'About', link: '#about', icon: <HiUser size={25}/> },
  { name: 'Experience', link: '#experiences', icon: <HiBriefcase size={25}/> },
  { name: 'Projects', link: '#projects', icon: <HiFolderOpen size={25}/> },
  { name: 'Contact', link: '#contact', icon: <HiMail size={25}/> },
];

const Home: React.FC = () => {
  return (
    <main className='bg-black-100'>
      <FloatingNav navItems={NavbarItems}/>
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </main>
  )
}

export default Home;

