import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-max sm:h-screen transition-colors duration-300'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 pt-24 sm:pt-0 flex flex-col justify-center h-full'>
        <p className='text-mountgreen-500 dark:text-pink-600'>Hi, my name is</p>
        <h1 className='text-7xl font-bold text-applegreen-500 text-mateblue-500 dark:text-whitesoft-400'>Pras</h1>
        <p className='text-mateblue-600 dark:text-darkblue-300 py-4 max-w-[700px]'>an Information Systems student at Mulawarman University with a passion for web programming.
        I’m a motivated learner, eager to expand my skills in web and software development. Over the past two years, I’ve gained experience in fundamental programming and web technologies, including JavaScript frameworks like React and Next.js. I’m also familiar with basic UI/UX design, having worked with tools like Figma. I’m always looking for new opportunities to enhance my knowledge and grow in my field.</p>
        <div className="max-w-fit" >
          <Link to="project" smooth={true} duration={500}>
            <button className='group rounded-md border-2 px-6 py-3 my-2 flex items-center border-mateblue-600 text-mateblue-600 hover:bg-mountgreen-500 hover:border-mountgreen-500 dark:text-white dark:border-white hover:bg-applegreen-500 hover:border-applegreen-500 dark:hover:bg-pink-600 dark:hover:border-pink-600 transition-colors duration-200 ease-in'>
              View Works
              <div className='group-hover:rotate-90 transition duration-200 ease-in'>
                <HiArrowNarrowRight className='ml-3'/>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home