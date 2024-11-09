import React, {useState, useContext} from 'react'
import EventDisplay from '../EventDisplay'
function EventItem({name, description, attendees, location}) {
  





  return (
    <div>
      <div>
        <h2 className='font-bold text-xl mb-4'>{name}</h2>
        <p className='my-2'>{description}</p>
      </div>

      <div className='display-flex align-left justify-left'>
        <h1>About the Host!</h1>
      </div>
      <div>
        <h2>Host reviews</h2>
      </div>
      <div>
        <h2>Location</h2>
      </div>
      <div>
        <h2>Map</h2>
      </div>
      <div>
        <h2>RSVP</h2>
      </div>

    </div>
  )
}

export default EventItem
