import React, {useState} from 'react'
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
            <h2 className='text-5xl p-4'>About Us</h2>
          </div>
          <div className='flex justify-center'>
            <button onClick={() => setActionClicked('organizer')} className='rounded-lg mr-4 bg-blue-700 text-white p-2 hover:opacity-70'>Organizer</button>
            <button onClick={()=> setActionClicked('events')} className='rounded-lg mr-4 bg-blue-700 text-white p-2 hover:opacity-70'>Events</button>
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
