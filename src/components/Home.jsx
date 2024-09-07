import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen transition-colors duration-300'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-mountgreen-500 dark:text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-applegreen-500 text-mateblue-500 dark:text-[#ccd6f6]'>Pras</h1>
        <p className='text-mateblue-600 dark:text-[#8892b0] py-4 max-w-[700px]'>I'm an enthusiastic, self-motivated student that passionate about front-end programming. I am always willing to learn new skills, especially web programming.</p>
        <div>
          <Link to="project" smooth={true} duration={500} >
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center border-applegreen-500 hover:bg-applegreen-500 hover:border-applegreen-500 dark:hover:bg-pink-600 dark:hover:border-pink-600'>
              View Works
              <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home