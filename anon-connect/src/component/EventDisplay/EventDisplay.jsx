import React, { useState } from 'react';
import EventItem from './EventItem/EventItem'; // Import EventItem
import EventThread from './EventThread/EventThread'; // Import EventThread
import EventMap from './EventMap.jsx';  

function EventDisplay() {
  const [currentItem, setCurrentItem] = useState(null); // State for the current selected event

  // Sample events data
  const eventsList = [
    {
      description: "Event for druggies to become clean.",
      location: "12345 street ave",
      name: "Cold turkey",
      attendees: 0,
      coordinates: { lat: 40.7128, lng: -74.0060 },
    },
    {
      description: "Event for alcoholics to become clean.",
      location: "67890 ave",
      name: "More drugs",
      attendees: 0,
      coordinates: { lat: 34.0522, lng: -118.2437 },
    },
  ];

  // Handle item click to show event details
  const handleItemClick = (eventThread) => {
    setCurrentItem(eventThread);
  };

  // Show event details if currentItem is selected
  if (currentItem) {
    return (
      <EventItem event={currentItem} />
    );
  }

  return (
    <div>
      <h3 className="text-5xl my-8">Events</h3>
      <div className="flex justify-center my-8">
        <div className="p-2 mx-6 border border-black rounded-md">
          {eventsList.map((eventThread) => (
            <div
              key={eventThread.name}
              onClick={() => handleItemClick(eventThread)}
              className="cursor-pointer"
            >
              <EventThread
                description={eventThread.description}
                location={eventThread.location}
                name={eventThread.name}
              />
            </div>
          ))}
        </div>

        {/* Map Section */}
        <EventMap eventsList={eventsList} />
      </div>
    </div>
  );
}

export default EventDisplay;
