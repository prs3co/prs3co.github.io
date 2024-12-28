/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react'
import EwasonsImg from '../assets/cover-ewasons.png'
import ConnectImg from '../assets/cover-connect.png'
import ReceiptOCRImg from '../assets/cover-receiptocr.png'
import { motion } from "framer-motion"
import { div } from 'framer-motion/client'
import { GiMountains } from 'react-icons/gi'

const projectsList = [
  {
    name: 'Ewasons',
    desc: 'ewasons',
    img: EwasonsImg,
    repo: '',
    demo: 'https://ewasons.netlify.app/',
    tags: [
      {
        name: 'group-project',
        color: 'rose'
      },
      {
        name: 'reactjs',
        color: 'teal'
      },
    ]
  },
  {
    name: 'Connect By BCA',
    desc: 'Connect By BCA',
    img: ConnectImg,
    repo: '',
    demo: 'https://connect-bca.netlify.app/',
    tags: [
      {
        name: 'group-project',
        color: 'rose'
      },
      {
        name: 'reactjs',
        color: 'teal'
      },
    ]
  },
  {
    name: 'Receipt OCR',
    desc: 'Connect By BCA',
    img: ReceiptOCRImg,
    repo: '',
    demo: 'https://receipt-ocr-murex.vercel.app/scan',
    tags: [
      {
        name: 'personal-project',
        color: 'blue'
      },
      {
        name: 'nextjs',
        color: 'amber'
      },
    ]
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
          <p className='text-4xl font-bold inline border-b-4 border-mountgreen-500 dark:border-pink-600'>Projects</p>
          <p className='py-4'>{'\u002F\u002F'} Check out what I’ve been up to lately</p>
          <div className='w-full h-full grid grid-cols-1 gap-4 text-center py-8 overflow-visible'>
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
                // <motion.div
                //   key={project.name}
                //   layout="position"
                //   transition={{
                //     type: "spring",
                //     duration: 1.5,
                //     stiffness: 700,
                //     damping: 30,
                //   }}
                //   className={`shadow-md rounded-md flex flex-col-reverse relative h-full sm:h-96 w-full overflow-hidden ${
                //     expandedIndex === index ?
                //     'row-span-2 sm:row-span-1 col-span-1 sm:col-span-2' :
                //     'row-span-1 col-span-1'
                //   }`}
                //   // style={{
                //   //   gridColumn: expandedIndex === index ? "span 2" : "span 1", // Adjusts grid-column span
                //   //   // gridRow: expandedIndex === index ? "span 2" : "span 1", // Adjusts grid-row span
                //   // }}
                //   onClick={() => handleClick(index)}
                // >
                //   <div
                //     style={{
                //       backgroundImage: `url(${project.img})`,

                //     }}
                //     className='shadow-md bg-whitesoft-200 dark:bg-darkblue-400 group container rounded-md flex justify-center items-center mx-auto w-[40rem] content-div p-24 absolute h-full bg-contain' >
                //   </div>
                //   <div className='relative w-full bg-whitesoft-200 dark:bg-darkblue-400'>
                //     <a href={`${project.demo}`} target='_blank' rel='noopener noreferrer'>
                //       <button className='text-mateblue-600 rounded-md dark:text-white border-2 border-mateblue-600 dark:border-white hover:border-mountgreen-500 hover:bg-mountgreen-500 dark:hover:bg-pink-600 dark:hover:border-pink-600 px-4 py-3 mx-auto flex items-center transition-colors duration-200 ease-in'>Demo</button>
                //     </a>
                //   </div>
                // </motion.div>
                <div key={project.name} className='shadow-md rounded-md dark:bg-darkblue-400 flex-col sm:flex-row gap-4 sm:h-48 w-full p-2 overflow-hidden relative flex items-center justify-start px-6 py-3 font-medium transition-all'>
                  <div className='image__container w-fit h-full overflow-clip rounded-md hover:scale-125 transform transition duration-500'>
                    <img src={project.img} alt="" className='w-full max-w-[100%] min-w-[200px] h-auto object-top object-contain' />
                  </div>
                  <div className='desc__container w-full h-full gap-4 flex flex-col'>
                    <p className='text-left font-semibold text-2xl'>{project.name}</p>
                    <div className='tag__list flex gap-1'>
                      {
                        project.tags.map((tag) => (
                          <div className={`bg-${tag.color}-900 w-fit p-1 px-2 rounded-xl text-white`}>
                            <p>{tag.name}</p>
                          </div>
                        ))
                      }
                    </div>
                    <div className='w-half h-full flex items-end justify-center'>
                    <a href={`${project.demo}`} target='_blank' rel='noopener noreferrer'>
                      <button href="#_" class="text-mateblue-600 rounded-md dark:text-white border-2 border-mateblue-600 dark:border-white dark:hover:border-white px-6 py-3 mx-auto relative inline-flex items-center justify-center p-4 overflow-hidden font-medium transition duration-300 ease-out   shadow-md group">
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-mountgreen-500 dark:bg-pink-500 group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-mateblue-500 dark:text-white transition-all duration-300 transform group-hover:translate-x-full ease">Demo</span>
                        <span class="relative invisible">Demo</span>
                      </button>
                    </a>
                    </div>
                  </div>
                </div>
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