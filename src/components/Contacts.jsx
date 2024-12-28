/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react'
import { motion } from "framer-motion"

const Contacts = () => {
  const [focusedInput, setFocusedInput] = useState(0);

  const handleFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <div name='contacts' className='px-8 py-20 w-full h-max flex justify-center items-center p-4'>
      <form action="https://getform.io/f/0817fe02-79bf-4ddc-8360-bb4c19242af5" method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-3'>
          <p className='text-4xl font-bold inline border-b-4 border-mountgreen-500 text-mateblue-500 dark:border-pink-600 dark:text-gray-300'>Contacts</p>
          <p className='text-mateblue-500 dark:text-gray-300 py-4'>{'\u002F\u002F'} Feel free to fill out the form or drop me an email.
          </p>
        </div>

        <motion.input
          animate={{
            background: focusedInput === 1 ? "linear-gradient(90deg,  #ccd6f6 35%,  #8f96ac 100%)" : "linear-gradient(90deg, #ccd6f6 0%, #ccd6f6 0%)",
          }}
          onFocus={() => handleFocus(1)}
          onBlur={handleBlur}
          transition={{ type: 'spring', stiffness: 200 }}
          className='p-2 bg-[#ccd6f6] rounded-md shadow-md focus:outline-none placeholder:text-mateblue-600'
          type="text"
          placeholder='Name'
          name='name'
        />

        <motion.input
          animate={{
            background: focusedInput === 2 ? "linear-gradient(90deg,  #ccd6f6 35%,  #8f96ac 100%)" : "linear-gradient(90deg, #ccd6f6 0%, #ccd6f6 0%)",
          }}
          onFocus={() => handleFocus(2)}
          onBlur={handleBlur}
          transition={{ type: 'spring', stiffness: 200 }}
          className='my-4 p-2 bg-[#ccd6f6] rounded-md shadow-md focus:outline-none placeholder:text-mateblue-600'
          type="email"
          placeholder='Email'
          name='email'
        />

        <motion.textarea
          animate={{
            background: focusedInput === 3 ? "linear-gradient(90deg,  #ccd6f6 35%,  #8f96ac 100%)" : "linear-gradient(90deg, #ccd6f6 0%, #ccd6f6 0%)",
          }}
          onFocus={() => handleFocus(3)}
          onBlur={handleBlur}
          transition={{ type: 'spring', stiffness: 200 }}
          className='p-2 bg-[#ccd6f6] rounded-md shadow-md focus:outline-none placeholder:text-mateblue-600'
          name="message"
          id=""
          cols="30"
          rows="9"
          placeholder='Message'
        ></motion.textarea>
        <button className='text-mateblue-500 border-mateblue-500 dark:border-white dark:text-white border-2 hover:bg-mountgreen-500 dark:hover:bg-pink-600 hover:border-mountgreen-500 dark:hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md transition-colors duration-200 ease-in'>Send Message</button>
      </form>
    </div>
  )
}

export default Contacts