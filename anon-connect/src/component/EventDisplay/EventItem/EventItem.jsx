import React, {useState, useContext} from 'react'
import EventDisplay from '../EventDisplay'
function EventItem({name, description, attendees, location}) {
  





  return (
    <div>
      <div>
        <h2 className='font-bold text-xl mb-4'>{name}</h2>
        <p className='my-2'>{description}</p>
      </div>

      <div className=''>
        
      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default EventItem
