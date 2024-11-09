import React, { useState, useEffect, useContext } from 'react'; 
import "./Profile.css"; 
import { UserContext } from '../../App.js'; 
import EventCreation from '../EventCreation/EventCreation.jsx';
import EventThread from '../EventDisplay/EventThread/EventThread.jsx';
import StarRating from './StarRating.jsx'; 

function Profile() {
  const { isLoggedIn } = useContext(UserContext);
  const [eventsClicked, setEventsClicked] = useState(false); 

  const handleEventsClicked = () => {
    setEventsClicked(true); 
  };

  const user = {
    organization: "Alcoholics Anonymous", 
    description: "We host continuous meeting for recovering alcoholics!", 
    location: "4531 Druggie Ave", rating: 3.5, 
    events: [
      {name: "Consultation", completed: true}, 
      {name: "Group Therapy", completed: true}, 
      {name: "Movie Night", completed: false}, 
      {name: "Pizza and Chat", completed: false}], 
      contactInfo: "123-456-7890"
    }; 

  // const users = [
  //   {organization: "Alcoholics Anonymous", description: "We host continuous meeting for recovering alcoholics!", rating: 5, events: ["hi", "hi2"], contactInfo: "123-456-7890"},
  //   {organization: "Narcotics Anonymous", description: "We host continuous meeting for recovering drug addicts!", rating: 5, events: ["hi", "hi2"], contactInfo: "123-456-7894"}
  // ];

  useEffect(() => {

  })

  const completedEvents = user.events.filter(event => event.completed);
  const currentEvents = user.events.filter(event => !event.completed);

  if (eventsClicked) {
    return <EventCreation />;
  } else {
    return (
      <div className="profileContainer">
        {/* Banner */}
        <div className="banner bg-blue-800 text-white p-6 mb-4 rounded-t-lg text-center">
          <h1 className="text-4xl font-bold">{user.organization}</h1>
          <p className="mt-2">{user.description}</p>
        </div>

        <div className="events flex">
          {/* Left Side: List of Events */}
          <div className="leftSide w-2/3 bg-light text-white p-4 rounded-l-lg">
            <h2 className="text-xl font-semibold mb-4">Current Events</h2>
            <ul className="eventsContainer space-y-2">
              {currentEvents.map((event, index) => (
                <li key={index} className="bg-gray-800 p-3 rounded">
                  <EventThread description={event.description} location={event.location} />
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">Past Events</h2>
            <ul className="eventsContainer space-y-2">
              {completedEvents.map((event, index) => (
                <li key={index} className="bg-gray-700 p-3 rounded">
                  <EventThread description={event.description} location={event.location} />
                </li>
              ))}
            </ul>

            {isLoggedIn && (
              <button 
                className="mt-4 rounded-lg bg-blue-700 text-white p-2 hover:opacity-70"
                onClick={handleEventsClicked}
              >
                Add Event
              </button>
            )}
          </div>

          {/* Right Side: Rating and Contact Us */}
          <div className="rightSide w-1/3 p-6 bg-white text-black rounded-r-lg flex flex-col space-y-6">
            {/* Rating */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Rating</h2>
              <div className="flex items-center justify-center">
                <StarRating rating={user.rating}/>
              </div>
              <div className="flex items-center justify-center">
                <p>{user.rating} / 5</p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="p-4 bg-gray-100 rounded-lg">
              <h2 className="underline text-lg font-semibold mb-2">Contact Us!</h2>
              <ul className="list-disc ml-6">
                <li>{user.contactInfo}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
