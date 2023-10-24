import React, { useContext } from 'react'
import { ImageContext } from '../App'
import FinalImage from './FinalImage'
import Loading from './Loading'

const Images = () => {
const {response, isLoading, searchedImage} = useContext(ImageContext)
// console.log(response)
  return (
    <div>
        <h1 className='text-center mt-6 underline text-2xl'></h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-8xl mx-auto px-3'>
            {
                isLoading ? <Loading item={10}/> : response.map((data,key)=><FinalImage key={key} data={data}/>)
            }
        </div>
    </div>
  )
}

export default Images