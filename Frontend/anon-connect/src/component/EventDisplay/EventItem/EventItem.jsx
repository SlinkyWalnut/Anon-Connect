import { UserContext } from '../../../App.js';
import { useState, useContext } from 'react';
import Profile from '../../Profile/Profile';
import EventMap from '../EventMap.jsx';


function EventItem({ event }) {
  const {
    name,
    description,
    attendees,
    location,
    coordinates,
    completed,
    userId
  } = event;


  const { isLoggedIn } = useContext(UserContext);
  const [actionClicked, setActionClicked] = useState(null);
  const [rsvpCount, setRsvpCount] = useState(attendees);
  const [rsvpClicked, setRsvpClicked] = useState(false);


  const handleRsvpClick = () => {
    if (!rsvpClicked && !isLoggedIn) {
      setRsvpCount((prevCount) => prevCount + 1);
      setRsvpClicked(true);
    }
  };


  if (actionClicked === 'Profile') {
    return <Profile hostId={userId}/>;
  }


  return (
    <div>
      <div className="p-6 bg-gradient-to-b from-primary to-secondary min-h-screen flex justify-center items-center">
        <div className="flex flex-col lg:flex-row bg-white shadow-xl rounded-lg w-full max-w-6xl gap-8 p-4">
          {/* Left Side Content */}
          <div className="flex-1 p-6 space-y-4 bg-orange-200 shadow-lg rounded-lg">
            {/* Event Details */}
            <div>
              <h2 className="font-bold text-3xl mb-2 text-gray-800">{name}</h2>
              <p className="text-gray-600 mb-4">{description}</p>
            </div>


            {/* Location */}
            <div className="text-gray-500 text-sm mt-4">
              <p>{location}</p>
            </div>


            {/* RSVP Section */}
            <div className="mt-4 flex flex-col items-center w-full">
              {completed ? (
                <h1 className="text-xs text-gray-600 mt-1">Event Has Passed</h1>
              ) : (
                <>
                  <button
                    onClick={handleRsvpClick}
                    className={`w-full py-2 rounded-lg border border-green-500 transition-colors ${!isLoggedIn ?(!rsvpClicked ?('bg-green-500 hover:bg-green-600') : ( 'bg-green-700' )) : ('bg-green-500')} text-white`}
                  >
                    {!isLoggedIn ? ( !rsvpClicked ? (<p>RSVP!</p>) : (<p>We'll see you there!</p>)) : (<p>Attendees: {rsvpCount}</p>)}
                  </button>
                  {/* {isLoggedIn && <p className="text-xs text-gray-600 mt-1">Attendees: {rsvpCount}</p>} */}
                </>
              )}
            </div>


            {/* About Host */}
            <div
              onClick={() => setActionClicked('Profile')}
              className="cursor-pointer bg-orange-500 text-white font-semibold p-4 rounded-lg mb-4 hover:bg-orange-400 transition"
            >
              About Host
            </div>


            {/* Host Reviews */}
            <div className="border-t pt-4 space-y-2">
              <h2 className="font-semibold text-lg">Host Reviews</h2>
              <div className="space-y-1">
                <p className="text-gray-600">"Great event!" - User 1</p>
                <p className="text-gray-600">"Very informative." - User 2</p>
              </div>
            </div>
          </div>


          {/* Right Side Content */}
          <div className="w-full lg:w-1/3 p-6 space-y-4 flex flex-col items-center">
            {/* Map Section */}
            <div className="h-full w-full bg-gray-200 rounded-lg shadow-md overflow-hidden flex items-center justify-center">
              <EventMap eventsList={[{ coordinates }]} /> {/* Pass only the selected event's coordinates */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default EventItem;


