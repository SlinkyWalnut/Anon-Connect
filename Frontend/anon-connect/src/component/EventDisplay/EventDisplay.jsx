import React, { useState, useEffect, useContext } from 'react';
import EventItem from './EventItem/EventItem'; // Import EventItem
import EventThread from './EventThread/EventThread'; // Import EventThread
import EventMap from './EventMap.jsx';
import { UserContext } from '../../App.js'; 

import "./EventDisplay.css";

function EventDisplay() {
  const [currentItem, setCurrentItem] = useState(null); // State for the current selected event
  const { authService, eventService } = useContext(UserContext);
  // const [eventsList, setEventsList] = useState([]);

  // useEffect(() => {
  //   eventService.getAllEvents().then((response) => {
  //     setEventsList(response.data.data);
  //   })
  // }, [eventService]);
  // Sample events data
  const eventsList = [
    {
      description: "These sessions teach individuals strategies to recognize triggers, manage cravings, and prevent relapse.",
      location: "12345 street ave",
      name: "Relaps Prevention Workshop",
      attendees: 0,
      coordinates: { lat: 40.7306, lng: -73.9352 },
    },
    {
      description: "These regular meetings offer support, accountability, and a safe space to share experiences and challenges.",
      location: "67890 ave",
      name: "Peer-Led Support Group",
      attendees: 0,
      coordinates: { lat: 40.7580, lng: -73.9855 },
    },
    {
      description: "Inspirational talks by individuals in recovery, addiction counselors, and others who have insights to share can be motivating for participants.",
      location: "56th street",
      name: "Guest Speaker Series",
      attendees: 0,
      coordinates: { lat: 40.6915, lng: -73.9875 },
      },
  ];

  // Handle item click to show event details
  const handleItemClick = (eventThread) => {
    setCurrentItem(eventThread);
  };

  // Show event details if currentItem is selected
  if (currentItem) {
    return <EventItem event={currentItem} />;
  }

  return (
    <div className="p-6 bg-gradient-to-b from-primary to-secondary min-h-screen">
      <h3 className="text-5xl text-white font-bold mb-8">Events</h3>

      <div className="flex flex-col lg:flex-row justify-center gap-8">
        {/* Events List Section */}
        <div className="event-container flex-1 p-4 bg-white shadow-lg rounded-lg">
          {eventsList.map((eventThread, index) => (
            <div
              key={eventThread.name}
              onClick={() => handleItemClick(eventThread)}
              className={`cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-4 mb-4 rounded-md ${index % 2 === 0 ? "bg-green-100 hover:bg-green-200" : "bg-orange-100 hover:bg-orange-200"}`}
            >
              <EventThread
                key={eventThread._id}
                description={eventThread.description}
                location={eventThread.location}
                name={eventThread.name}
              />
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
          <EventMap eventsList={eventsList} />
        </div>
      </div>
    </div>
  );
}

export default EventDisplay;