import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '@/components/sections/Experience'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { NavbarItems } from '@/data/index'


const Home: React.FC = () => {
  return (
    <main className='bg-black-100'>
      <FloatingNav navItems={NavbarItems}/>
      <Hero />
      <About />
      <Experience />
    </main>
  )
}

export default Home;