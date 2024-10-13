/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import JavaScript from '../assets/javascript.png';
import Typescript from '../assets/ts-logo-256.png';
import ReactJS from '../assets/react.png';
import Bootstrap from '../assets/bootstrap-logo.png';
import Tailwind from '../assets/tailwind.png';
import Nextjs from '../assets/nextjs.png';

const skillList = [
  {
    name: "JavaScript",
    img: JavaScript,
  },
  {
    name: "Typescript",
    img: Typescript,
  },
  {
    name: "Bootstrap",
    img: Bootstrap,
  },
  {
    name: "Tailwind CSS",
    img: Tailwind,
  },
  {
    name: "ReactJS",
    img: ReactJS,
  },
  {
    name: "Next.js",
    img: Nextjs,
  },
]

const Skills = () => {
  return (
    <div name='skills' className='w-full h-fit max-h-fit text-mateblue-500 dark:text-whitesoft-400 pt-20'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-mountgreen-500 dark:border-pink-600'>Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {
            skillList.map((skill) => (
            <div key={skill.name} className='p-6 flex flex-col gap-4 shadow-md bg-mountgreen-500 dark:bg-darkblue-400 rounded-md hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={skill.img} alt="HTML" />
              <p className='text-whitesoft-500'>{skill.name}</p>
            </div>
            ))
          }
        </div>
        <div className="max-w-fit self-center">
          <a href="https://www.linkedin.com/in/mekopr/" target='_blank' rel='noopener noreferrer'>
            <button className='text-mateblue-600 rounded-md border-mateblue-600 dark:text-white border-2 hover:bg-mountgreen-500 hover:border-mountgreen-500 dark:hover:bg-pink-600 dark:border-white dark:hover:border-pink-600 px-4 py-3 mx-auto flex items-center transition-colors duration-200 ease-in'>See More</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Skills