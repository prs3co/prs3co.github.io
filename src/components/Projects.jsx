/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react'
import CoverTes from '../assets/cover-tes.png'
import CoverImg from '../assets/cover-project.png'
import EwasonsImg from '../assets/cover-ewasons.png'
import ConnectImg from '../assets/cover-connect.png'
import { motion } from "framer-motion"

const projectsList = [
  {
    name: 'Ewasons',
    desc: 'ewasons',
    img: EwasonsImg,
    repo: '',
    demo: 'https://ewasons.netlify.app/',
  },
  {
    name: 'Connect By BCA',
    desc: 'Connect By BCA',
    img: ConnectImg,
    repo: '',
    demo: 'https://connect-bca.netlify.app/',
  },
  {
    name: 'Receip OCR',
    desc: 'Connect By BCA',
    img: CoverImg,
    repo: '',
    demo: '',
  },
  // {
  //   name: 'Receip OCR',
  //   desc: 'Connect By BCA',
  //   img: CoverTes,
  //   repo: '',
  //   demo: '',
  // },
]

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const variants = {
    hover: { y: '0' },
    click: { scaleY: '120vh' },
  };


  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div name='project' className='w-full h-full text-mateblue-500 dark:text-gray-300 pt-20'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-mountgreen-500 dark:border-pink-600'>Featured Projects</p>
          <p className='py-4'>{'\u002F\u002F'} Check out some of my recent projects</p>
          <div className='w-full h-[156vh] sm:h-fit grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8 overflow-visible'>
            {
              projectsList.map((project, index) => (
                // <motion.div key={project.name}
                //   whileHover='hover'
                //   className='shadow-md rounded-md relative h-96 overflow-hidden duration-300'>
                //   <div
                //     style={{backgroundImage: `url(${Ewasons})`}}
                //     className='shadow-md bg-mountgreen-500 dark:bg-darkblue-400 group container rounded-md flex justify-center items-center mx-auto w-full h-full content-div p-24 absolute' >
                //   </div>
                //   <motion.div
                //     variants={variants}
                //     initial={{
                //       y: '100vh',
                //     }}
                //     transition={{ type: "spring", duration: 1, stiffness: 50}}
                //     className=' bg-mountgreen-500 bg-gradient-to-r from-mountgreen-500 to-mateblue-500 dark:from-darkblue-400 dark:to-pink-600 dark:bg-darkblue-400 group container rounded-md flex justify-center items-center mx-auto w-full h-full content-div p-24 absolute'>
                //     <div className=''>
                //       <span className='text-2xl text-center font-bold text-white'>
                //         <p>
                //           {project.name}
                //         </p>
                //       </span>
                //       <div className='pt-4 text-center'>
                //         <a href="https://master--spiffy-macaron-11dfbb.netlify.app/" target="_blank" rel="noopener noreferrer">
                //           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                //         </a>
                //         <a href="https://github.com/gstbgsdarmika/Ewasons-WebApp" target="_blank" rel='noopener noreferrer'>
                //           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                //         </a>
                //       </div>
                //     </div>
                //   </motion.div>
                // </motion.div>
                <motion.div
                  key={project.name}
                  layout="position"
                  transition={{
                    type: "spring",
                    duration: 1.5,
                    stiffness: 700,
                    damping: 30,
                  }}
                  className={`shadow-md rounded-md flex flex-col-reverse relative h-full sm:h-96 w-full overflow-hidden ${
                    expandedIndex === index ?
                    'row-span-2 sm:row-span-1 col-span-1 sm:col-span-2' :
                    'row-span-1 col-span-1'
                  }`}
                  // style={{
                  //   gridColumn: expandedIndex === index ? "span 2" : "span 1", // Adjusts grid-column span
                  //   // gridRow: expandedIndex === index ? "span 2" : "span 1", // Adjusts grid-row span
                  // }}
                  onClick={() => handleClick(index)}
                >
                  <div
                    style={{
                      backgroundImage: `url(${project.img})`,

                    }}
                    className='shadow-md bg-whitesoft-200 dark:bg-darkblue-400 group container rounded-md flex justify-center items-center mx-auto w-[40rem] content-div p-24 absolute h-full bg-contain' >
                  </div>
                  <div className='relative w-full bg-whitesoft-200 dark:bg-darkblue-400'>
                    <a href={`${project.demo}`} target='_blank' rel='noopener noreferrer'>
                      <button className='text-mateblue-600 rounded-md dark:text-white border-2 border-mateblue-600 dark:border-white hover:border-mountgreen-500 hover:bg-mountgreen-500 dark:hover:bg-pink-600 dark:hover:border-pink-600 px-4 py-3 mx-auto flex items-center transition-colors duration-200 ease-in'>Demo</button>
                    </a>
                  </div>
                </motion.div>
              ))
            }
          </div>
          <div className='flex justify-center'>
            {/* <div className='max-w-fit self-center'>
              <a href="https://github.com/prs3co?tab=repositories" target='_blank' rel='noopener noreferrer'>
                <button className='text-mateblue-600 rounded-md dark:text-white border-2 border-mateblue-600 dark:border-white hover:border-mountgreen-500 hover:bg-mountgreen-500 dark:hover:bg-pink-600 dark:hover:border-pink-600 px-4 py-3 mx-auto flex items-center transition-colors duration-200 ease-in'>See More</button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects