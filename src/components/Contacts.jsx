/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

const Contacts = () => {
  return (
    <div name='contacts' className='px-8 py-20 w-full h-max bg-[#0a192f] flex justify-center items-center p-4'>
      <form action="https://getform.io/f/0817fe02-79bf-4ddc-8360-bb4c19242af5" method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-3'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contacts</p>
          <p className='text-gray-300 py-4'>// Submit the form below or send me an email</p>
        </div>
        <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='p-2 bg-[#ccd6f6]' name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
      </form>
    </div>
  )
}

export default Contacts