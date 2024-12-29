import React from 'react'
import Hero from '../components/sections/Hero'

const Home: React.FC = () => {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-center min-h-screen mx-auto overflow-hidden sm:px-10 px-5">
      <div className='text-white text-center max-w-7xl w-full'>
        {/* <h1>Hello my name is Haoyuan Chen</h1>
        <p>Studying Computer Science and Mathematics @ Rensselaer Polytechnic Institute</p> */}

        <Hero />

      </div>
    </main>
  )
}

export default Home;