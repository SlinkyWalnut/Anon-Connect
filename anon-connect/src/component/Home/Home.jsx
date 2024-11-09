import React, { useState } from 'react'
import "./Home.css"
import EventDisplay from '../EventDisplay/EventDisplay';
import Login from '../Auth/Login/Login';




function Home() {
  const [actionClicked, setActionClicked] = useState("home");

  const handleClicks = () => {
    if(actionClicked === 'organizer'){
      return <Login />
    } else if (actionClicked === 'events'){
      return <EventDisplay />
    } else {
      return (
        <div>
          <div>
            <h2 className='text-6xl p-4'>We Detox</h2>
            <h2 className='text-3xl p-4'>About Us</h2>
            <p className='max-w-md mx-auto'><span className='font-bold'>Problem: </span>Millions of people are struggling with substance abuse disorder every day, locked in an uphill battle that is only exacerbated by a lack of community and resources that could support them.</p>
            <p className='max-w-md mx-auto my-4'><span className='font-bold'>Solution: </span>We are an event-hosting application that strives to connect people suffering from substance abuse to each other as well as to medical organizations that promote growth and wellness.</p>
          </div>
          <div className='flex justify-center'>
            <button onClick={() => setActionClicked('organizer')} className='rounded-lg mr-4 bg-blue-700 text-white text-lg py-2 px-6 hover:opacity-70'>Organizer</button>
            <button onClick={()=> setActionClicked('events')} className='rounded-lg mr-4 bg-blue-700 text-white text-lg py-2 px-6 hover:opacity-70'>Events</button>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      {handleClicks()}
    </div>
  )
}

export default Home
