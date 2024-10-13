/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Ewasons from '../assets/ewasons.PNG'
import { motion } from "framer-motion"

const projectsList = [
  {
    name: 'Ewasons',
    desc: 'ewasons',
    img: Ewasons,
    repo: '',
    demo: '',
  },
  {
    name: 'Connect By BCA',
    desc: 'Connect By BCA',
    img: Ewasons,
    repo: '',
    demo: '',
  },
  // {
  //   name: 'Receipty OCR',
  //   desc: 'Connect By BCA',
  //   img: Ewasons,
  //   repo: '',
  //   demo: '',
  // },
]

const Projects = () => {

  const variants = {
    hover: { y: '0' },
  };

  return (
    <div name='project' className='w-full h-full text-mateblue-500 dark:text-gray-300 pt-20'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-mountgreen-500 dark:border-pink-600'>Featured Projects</p>
          <p className='py-4'>{'\u002F\u002F'} Check out some of my recent projects</p>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8'>
            {
              projectsList.map((project) => (
                <motion.div key={project.name} whileHover='hover' className='shadow-md rounded-md relative h-96 overflow-hidden' >
                  <div
                    style={{backgroundImage: `url(${Ewasons})`}}
                    className='shadow-md bg-mountgreen-500 dark:bg-darkblue-400 group container rounded-md flex justify-center items-center mx-auto w-full h-full content-div p-24 absolute'>
                  </div>
                  <motion.div
                    variants={variants}
                    initial={{ y: '100vh' }}
                    transition={{ type: "spring", duration: 1, stiffness: 50}}
                    className=' bg-mountgreen-500 bg-gradient-to-r from-mountgreen-500 to-mateblue-500 dark:from-darkblue-400 dark:to-pink-600 dark:bg-darkblue-400 group container rounded-md flex justify-center items-center mx-auto w-full h-full content-div p-24 absolute'>
                    <div className=''>
                      <span className='text-2xl text-center font-bold text-white'>
                        <p>
                          {project.name}
                        </p>
                      </span>
                      <div className='pt-4 text-center'>
                        <a href="https://master--spiffy-macaron-11dfbb.netlify.app/" target="_blank" rel="noopener noreferrer">
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/gstbgsdarmika/Ewasons-WebApp" target="_blank" rel='noopener noreferrer'>
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))
            }
          </div>
          <div className='flex justify-center'>
            <div className='max-w-fit self-center'>
              <a href="https://github.com/prs3co?tab=repositories" target='_blank' rel='noopener noreferrer'>
                <button className='text-mateblue-600 rounded-md dark:text-white border-2 border-mateblue-600 dark:border-white hover:border-mountgreen-500 hover:bg-mountgreen-500 dark:hover:bg-pink-600 dark:hover:border-pink-600 px-4 py-3 mx-auto flex items-center transition-colors duration-200 ease-in'>See More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects