import React from 'react'

function EventThread({description, location}) {
  return (
    <div className='border my-2 border-black rounded p-2'>
      <div><h2 className='font-bold text-xl mb-4'>Event Title</h2></div>
      <p className='my-2'>{description}</p>
      <p>Location: {location}</p>
    </div>
  )
}

export default EventThread
