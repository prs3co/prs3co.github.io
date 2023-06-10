/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Ewasons from '../assets/ewasons.PNG'
import Hungerian from '../assets/hungerian.PNG'
import Rekammedis from '../assets/rekammedis.png'

const Projects = () => {
  return (
    <div name='project' className='w-full h-full text-gray-300 bg-[#0a192f] pt-20'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
          <p className='py-4'>// Check out some of my recent projects</p>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8'>
            <div style={{backgroundImage: `url(${Ewasons})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div p-24'>
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl text-center font-bold text-white'>
                  <p>
                    Ewasons Web
                  </p>
                </span>
                {/* <span className='text-base text-white overflow-hidden'>
                  <p>
                  Ewasons is an electronic-based waste sales system website. This website was created to increase the contribution of the community in tackling the waste problem so that it can help protect the environment around.
                  </p>
                </span> */}
                <div className='pt-4 text-center'>
                  <a href="https://master--spiffy-macaron-11dfbb.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/gstbgsdarmika/Ewasons-WebApp" target="_blank" rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                  </a>
                </div>
              </div>
            </div>
            <div style={{backgroundImage: `url(${Hungerian})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div p-24'>
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl text-center font-bold text-white'>
                  <p>
                    Hungerian Web
                  </p>
                </span>
                {/* <span className='text-base text-white overflow-hidden'>
                  <p>
                  Ewasons is an electronic-based waste sales system website. This website was created to increase the contribution of the community in tackling the waste problem so that it can help protect the environment around.
                  </p>
                </span> */}
                <div className='pt-4 text-center'>
                  <a href="https://main--silly-douhua-56b858.netlify.app/" target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/prs3co/hungerian-restaurant-web" target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                  </a>
                </div>
              </div>
            </div>
            <div style={{backgroundImage: `url(${Rekammedis})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div p-24'>
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl text-center font-bold text-white'>
                  <p>
                    Rekammedis
                  </p>
                </span>
                {/* <span className='text-base text-white overflow-hidden'>
                  <p>
                  Ewasons is an electronic-based waste sales system website. This website was created to increase the contribution of the community in tackling the waste problem so that it can help protect the environment around.
                  </p>
                </span> */}
                <div className='pt-4 text-center'>
                  <a href="https://github.com/prs3co/medicalwebapp-php-mysql" target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                  </a>
                </div>
              </div>
            </div>
            {/* <div style={{backgroundImage: `url(${Ewasons})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div p-24'>
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl text-center font-bold text-white'>
                  <p>
                    Ewasons Web
                  </p>
                </span>
                <span className='text-base text-white overflow-hidden'>
                  <p>
                  Ewasons is an electronic-based waste sales system website. This website was created to increase the contribution of the community in tackling the waste problem so that it can help protect the environment around.
                  </p>
                </span>
                <div className='pt-4 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
          <a href="https://github.com/prs3co?tab=repositories" target='_blank' rel='noopener noreferrer'>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center'>See More</button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Projects