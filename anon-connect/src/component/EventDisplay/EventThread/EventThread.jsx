import React, {useState} from 'react'
import EventItem from '../EventItem/EventItem';

function EventThread({description, location, name}) {



  
  return (
  <div className='border my-2 border-black rounded p-2'>
      <div><h2 className='font-bold text-xl mb-4'>{name}</h2></div>
      <p className='my-2'>{description}</p>
      <p>Location: {location}</p>
    </div>
    )
}

export default EventThread
