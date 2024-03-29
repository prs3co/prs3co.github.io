import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/ideaa.png';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo" style={{width: '50px'}}/>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='hover:text-pink-600'>
          <Link to="home" smooth={true} duration={500} >
            Home
          </Link>
        </li>
        {/* <li>About</li> */}
        <li className='hover:text-pink-600'>
          <Link to="skills" smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li className='hover:text-pink-600'>
          <Link to="project" smooth={true} duration={500} >
            Projects
          </Link>
        </li>
        {/* <li>
          <Link to="home" smooth={true} duration={500} >
            Sertification
          </Link>
        </li> */}
        <li className='hover:text-pink-600'>
          <Link to="contacts" smooth={true} duration={500} >
            Contacts
          </Link>
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