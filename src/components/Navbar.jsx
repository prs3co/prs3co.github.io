import React, {useContext, useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { CiCloudSun, CiCloudMoon } from "react-icons/ci";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll'
import { DarkModeContext } from '../context/ThemeContext';
import { motion } from "framer-motion"
import { GiMountains, GiLanternFlame } from "react-icons/gi";
import { TypeAnimation } from 'react-type-animation';


const menuList = [
  {
    name: 'About',
    path: '/',
  },
  {
    name: 'Project',
    path: '/',
  },
  {
    name: 'Contact',
    path: '/',
  },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed z-50 w-full h-[80px] flex justify-between items-center px-4 transition-colors duration-200 bg-whitesoft-500 dark:bg-darkblue-500 text-gray-300'>
      <motion.div className='flex gap-2'
        drag
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragConstraints={{ left: 1, right: 1260, top: 1, bottom: 520 }}
        dragElastic={0.2}

        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: isDarkMode ? 360 : 0 }}
      >
        {
          isDarkMode ? (
            <div>
              <svg width="0" height="0">
                <linearGradient id="lantern-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop stopColor="#db2777" offset="40%" />
                  <stop stopColor="#ccd6f6" offset="100%" />
                </linearGradient>
              </svg>
              <GiLanternFlame className='w-14 h-14'  style={{fill: "url(#lantern-gradient)"}} />
            </div>
          ) : (
            <motion.div
              // whileHover={{
              //   rotate: 360
              // }}
              // transition={{ repeat: 1, repeatType: 'reverse', duration: 2 }}
            >
              <svg width="0" height="0">
                <linearGradient id="mount-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop stopColor="#16C79A" offset="40%" />
                  <stop stopColor="#11698E" offset="100%" />
                </linearGradient>
              </svg>
              <GiMountains className='w-14 h-14' style={{fill: "url(#mount-gradient)"}} />
            </motion.div>
          )
        }
        <div className='text-mateblue-500 bg-whitesoft-300 shadow-md rounded-ss-none rounded-full p-4 w-fit h-fit'>
          <TypeAnimation
            sequence={[
              '^_^',
              10000,
              "I bet you can't drag me!",
              10000,
              'Slide me to unlock something cool!',
              10000,
              'Designed to pop, not drag around!',
              10000,
              'Whoa! I’m a logo, not a toy!',
              10000,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
          />
        </div>
      </motion.div>

      {/* menu */}
      <ul className='hidden md:flex'>
        {
          menuList.map((menu) => (
          <li key={menu.path} className='text-mountgreen-500 hover:text-whitesoft-500 hover:bg-mountgreen-500 dark:text-whitesoft-400 dark:hover:text-whitesoft-400 dark:hover:bg-pink-600 flex items-center justify-center rounded-full'>
            <Link to={menu.path} smooth={true} duration={500} >
              {menu.name}
            </Link>
          </li>
          ))
        }
        <li className='content-center'>
          {/* darkmode toggler */}
          <motion.div
            onClick={toggleDarkMode}
            className='w-10 h-10 flex justify-center items-center rounded-full bg-mountgreen-500 dark:bg-pink-600'
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: isDarkMode ? 360 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {!isDarkMode ? (
              <CiCloudSun className='w-8 h-8 text-whitesoft-500' />
            ) : (
              <CiCloudMoon className='w-8 h-8 text-whitesoft-400' />
            )}
          </motion.div>
        </li>
      </ul>

      {/* hamburgers */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li onClick={handleClick} className='py-6 text-4xl'>
          <Link to="home" smooth={true} duration={500} >
            Home
          </Link>
        </li>
        {/* <li className='py-6 text-4xl'>About</li> */}
        <li onClick={handleClick} className='py-6 text-4xl'>
          <Link to="skills" smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li onClick={handleClick} className='py-6 text-4xl'>
          <Link to="project" smooth={true} duration={500} >
            Project
          </Link>
        </li>
        {/* <li onClick={handleClick} className='py-6 text-4xl'>
          <Link to="project" smooth={true} duration={500} >
            Sertification
          </Link>
        </li> */}
        <li onClick={handleClick} className='py-6 text-4xl'>
          <Link to="contacts" smooth={true} duration={500} >
            Contacts
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/muhammad-eko-prasetyo/" target='_blank' rel='noopener noreferrer'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/prs3co" target='_blank' rel='noopener noreferrer'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#A10035]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://mail.google.com/mail/u/0/?fs=1&to=muhammad.ekoprasetyo1317@gmail.com&su=SUBJECT&body=BODY&tf=cm" target='_blank' rel='noopener noreferrer'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/" target='_blank' rel='noopener noreferrer'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar