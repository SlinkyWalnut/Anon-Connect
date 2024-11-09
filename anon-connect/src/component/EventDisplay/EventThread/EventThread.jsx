import React, {useState} from 'react'
import EventItem from '../EventItem/EventItem';

function EventThread({description, location, name}) {

  
  const [eventsClicked, setEventsClicked] = useState(false);
  const handleEventsClicked = () => {
  setEventsClicked(true);
  }
  return (
    (!eventsClicked ? <div onClick={handleEventsClicked}  className='border my-2 border-black rounded p-2'>
      <div><h2 className='font-bold text-xl mb-4'>{name}</h2></div>
      <p className='my-2'>{description}</p>
      <p>Location: {location}</p>
    </div>: <EventItem/>
    )
  )
}

export default EventThread
