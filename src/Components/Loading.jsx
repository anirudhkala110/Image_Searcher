import React from 'react'

const Loading = ({ item }) => {
    return [...Array(item).keys()].map(() => (
        <div className='animate-pulse'>
            <div className='bg-gray-500 rounded-lg h-72'></div>
        </div>
    ))
}

export default Loading