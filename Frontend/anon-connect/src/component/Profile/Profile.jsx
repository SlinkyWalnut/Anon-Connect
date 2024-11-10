import React, { useState, useEffect, useContext } from 'react'; 
import "./Profile.css"; 
import { UserContext } from '../../App.js'; 
import EventCreation from '../EventCreation/EventCreation.jsx';
import EventThread from '../EventDisplay/EventThread/EventThread.jsx';
import EventItem from "../EventDisplay/EventItem/EventItem.jsx";
import StarRating from './StarRating.jsx'; 

function Profile() {
  const { isLoggedIn } = useContext(UserContext);
  const [openEventsCreation, setOpenEventsCreation] = useState(false); 
  const [actionClicked, setActionClicked] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const handleEventsClicked = () => {
    setOpenEventsCreation(!openEventsCreation); 
  };

  const user = {
    organization: "Alcoholics Anonymous", 
    description: "We host continuous meetings for recovering alcoholics!", 
    location: "4531 Druggie Ave", 
    rating: 3.5, 
    events: [
      { name: "Consultation", completed: true, location: "4531 Druggie Ave", description: "Meet with a therapist to discuss your struggles with alcohol." }, 
      { name: "Group Therapy", completed: true, location: "4531 Druggie Ave", description: "Meet with other struggling alcoholics and talk about your experience together." }, 
      { name: "Movie Night", completed: false, location: "4531 Druggie Ave", description: "We're watching Coraline!!" }, 
      { name: "Pizza and Chat", completed: false, location: "4531 Druggie Ave", description: "Come get free pizza and talk to our free sponsors that provide opportunities and motivation for recovering!" }
    ], 
    contactInfo: ["123-456-7890", 'WeHelpDruggies@AcolAnon.org'],
  };

  useEffect(() => {}, []);  // No changes here for now

  const handleItemClick = (eventThread) => {
    setCurrentItem(eventThread);
  };

  if (currentItem) {
    return <EventItem event={currentItem} />;
  }

  const completedEvents = user.events.filter(event => event.completed);
  const currentEvents = user.events.filter(event => !event.completed);

  return (
    <div className="profileContainer bg-gray-800 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Banner */}
        <div className="banner bg-teal-600 text-white p-6 mb-6 rounded-lg text-center relative">
          {isLoggedIn && (
            <button className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-transform hover:scale-110">
              Sign Out
            </button>
          )}
          <h1 className="text-4xl font-bold">{user.organization}</h1>
          <p className="mt-2">{user.description}</p>
        </div>

        <div className="events flex gap-8">
          {/* Left Side: List of Events */}
          <div className="leftSide w-2/3 bg-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-white">Current Events</h2>
            <ul className="space-y-3">
              {currentEvents.map((event, index) => (
                <li 
                  onClick={() => handleItemClick(event)}  
                  key={index} 
                  className="cursor-pointer bg-blue-500 text-gray-200 p-4 rounded-lg transition-all hover:bg-blue-200 hover:text-white hover:scale-105">
                  <EventThread description={event.description} location={event.location} />
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">Past Events</h2>
            <ul className="space-y-3">
              {completedEvents.map((event, index) => (
                <li 
                  onClick={() => handleItemClick(event)} 
                  key={index} 
                  className="cursor-pointer bg-gray-300 text-white p-4 rounded-lg transition-all hover:bg-gray-100 hover:text-white hover:scale-105">
                  <EventThread description={event.description} location={event.location} />
                </li>
              ))}
            </ul>

            {isLoggedIn && (
              <button 
                onClick={handleEventsClicked} 
                className="mt-6 rounded-lg bg-teal-500 text-white py-2 px-6 hover:opacity-80 transform transition-all hover:scale-110">
                Add Event
              </button>
            )}
          </div>

          {/* Right Side: Rating and Contact Us */}
          <div className="rightSide w-1/3 p-6 bg-gray-700 text-white rounded-lg shadow-lg">
            {/* Rating */}
            <div className="p-4 bg-gray-600 rounded-lg w-full mb-5">
              <h2 className="text-lg font-semibold mb-2 text-gray-300">Rating</h2>
              <div className="flex items-center justify-center mb-2">
                <StarRating rating={user.rating} />
              </div>
              <div className="flex items-center justify-center">
                <p>{user.rating} / 5</p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="p-4 bg-gray-600 rounded-lg w-full">
              <h2 className="underline text-lg font-semibold mb-2 text-gray-300">Contact Us!</h2>
              <ul className=" text-sm ml-6 text-gray-300">
                {user.contactInfo.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <EventCreation openCreation={openEventsCreation} closeCreation={setOpenEventsCreation} />
    </div>
  );
}

export default Profile;