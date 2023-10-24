import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Images from './ImageSearch'
import ImageSearch from './ImageSearch'
const Homepage = ({ children }) => {
  return (
    <div className='bck flex items-center py-3'>
      <div className='max-w-md mx-auto w-full'>
        <h1 className='text-white text-center text-5xl font-bold mb-3 bg-black pb-3 rounded'>Find Images</h1>
        {children}
      </div>

    </div>
  )
}

export default Homepage