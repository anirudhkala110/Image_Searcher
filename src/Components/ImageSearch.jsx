import React, { useContext, useState } from 'react';
import { ImageContext } from '../App';

const ImageSearch = () => {
    const [value, setValue] = useState()
    const { fetchData } = useContext(ImageContext)

    const handleChange = (e) => {
        setValue(e.target.value)
        fetchData(e.target.value)
    }
    return (
        <div className='flex'>
            <input className='bg-gray-50 border border-gray-300 text-sm w-full text-dark indent-2 py-2.5 px-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded' type='search' value={value} placeholder='Search for image. . . ' onChange={e => handleChange(e)} />
            {/* <button className='bg-blue-600 px-5 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disable:bg-gray-400'>Search</button> */}
        </div>
    );
}

export default ImageSearch;
