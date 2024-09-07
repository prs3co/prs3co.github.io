import React, {useContext, useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { CiCloudSun, CiCloudMoon } from "react-icons/ci";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/ideaa.png';
import {Link} from 'react-scroll'
import { DarkModeContext } from '../context/ThemeContext';
import { motion } from "framer-motion"
import { GiMountains, GiLanternFlame } from "react-icons/gi";


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
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-whitesmoke-500 dark:bg-darkblue-500 text-gray-300'>
      <div>
        {
          isDarkMode ? <GiLanternFlame className='w-14 h-14' /> : <GiMountains className='w-14 h-14 text-mountgreen-500' />
        }
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        {
          menuList.map((menu) => (
          <li key={menu.path} className='text-mountgreen-500 hover:text-whitesoft-500 hover:bg-mountgreen-500 dark:hover:text-pink-800 flex items-center justify-center rounded-full'>
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
            className='w-10 h-10 flex justify-center items-center rounded-full bg-mountgreen-500 hover:bg-darkblue'
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: isDarkMode ? 360 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {!isDarkMode ? (
              <CiCloudSun className='w-8 h-8 text-whitesoft-500' />
            ) : (
              <CiCloudMoon className='w-8 h-8' />
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