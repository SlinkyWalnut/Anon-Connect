import React, {useState} from 'react'
import "./Home.css"
import EventDisplay from '../EventDisplay/EventDisplay';



function Home() {
  const [eventsClicked, setEventsClicked] = useState(false);
  const handleEventsClicked = () => {
    setEventsClicked(true);
  }
  return (
    (!eventsClicked ? <div>
      <div>
        <h2 className='text-5xl p-4'>About Us</h2>
      </div>
      <div className='flex justify-center'>
        <button className='rounded-lg mr-4 bg-blue-700 text-white p-2 hover:opacity-70'>Organizer</button>
        <button onClick={handleEventsClicked} className='rounded-lg mr-4 bg-blue-700 text-white p-2 hover:opacity-70'>Events</button>
      </div>
    </div> : <EventDisplay />)
  )
}

export default Home
