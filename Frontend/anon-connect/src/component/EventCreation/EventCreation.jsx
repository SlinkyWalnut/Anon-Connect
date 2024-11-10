import React, { useState, useContext } from 'react';
import './EventCreation.css';
import { UserContext } from '../../App.js'; 

import Modal from '../Modal/Modal';
function getRandomValue() {
  return Math.random() < 0.5 ? 0 : 1;
}
function EventCreation({ openCreation, closeCreation }) {
  const { authService, eventService } = useContext(UserContext);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventName = e.target.eventName.value;
    const eventLocation = e.target.eventLocation.value;
    const eventDate = e.target.eventDate.value;
    const eventDuration = e.target.eventDuration.value;
    const eventDescription = e.target.eventDescription.value;
    const eventSpeakers = e.target.eventSpeakers.value;
    const eventTags = e.target.eventTags.value;
    const randomNum = Math.floor(Math.random() * (10)); 
    const latLongPairs = [
      { "latitude": 40.725318206725415, "longitude": -73.97687786569772 },
      { "latitude": 40.86687739258211, "longitude": -73.79682524851063 },
      { "latitude": 40.72760157699452, "longitude": -74.0024565733655 },
      { "latitude": 40.506187281852836, "longitude": -73.78322868445643 },
      { "latitude": 40.764956159745, "longitude": -74.14548208089526 },
      { "latitude": 40.59911477428061, "longitude": -73.88447658135372 },
      { "latitude": 40.69822105844685, "longitude": -73.92897314407416 },
      { "latitude": 40.65358133449056, "longitude": -73.90460307437931 },
      { "latitude": 40.765199198887105, "longitude": -74.15725082867427 },
      { "latitude": 40.830888535533665, "longitude": -73.91987610712516 }
    ];

    const eventInfo = {
      name: eventName,
      userId: authService.id,
      location: eventLocation,
      startDate: eventDate,
      duration: eventDuration,
      description: eventDescription,
      speakers: eventSpeakers,
      tags: eventTags,
      reviews: [],
      attendees: 0,
      coordinates: '',
      completed: getRandomValue()
    };

    eventService.postEvent(eventInfo);
    
    setIsFormSubmitted(true); 
      setIsFormSubmitted(false); 
      closeCreation(false);
    }; 

  return (
    <div>
      {!isFormSubmitted && (
        <Modal title="Event Creation" isOpen={openCreation} close={closeCreation}>
          <form onSubmit={handleSubmit} className="event-creation-form bg-grey text-white">
            <label htmlFor="eventName">Event Name</label>
            <input
              className="input"
              type="text"
              id="eventName"
              name="eventName"
              placeholder="Your Event's Name"
            />
            <label htmlFor="Location">Event Location</label>
            <input
              className="input"
              type="text"
              id="eventLocation"
              name="eventLocation"
              placeholder="Your Event's Location"
            />
            <label htmlFor="eventDate">Event Date</label>
            <input
              className="input"
              type="date"
              id="eventDate"
              name="eventDate"
            />
            <label htmlFor="eventDuration">Event Duration</label>
            <input
              className="input"
              type="number"
              id="eventDuration"
              name="eventDuration"
              placeholder="Duration in Minutes"
            />
            <label htmlFor="eventDescription">Event Description</label>
            <input
              className="input"
              type="text"
              id="eventDescription"
              name="eventDescription"
              placeholder="Your Event's Description"
            />
            <label htmlFor="eventSpeakers">Event Speakers</label>
            <input
              className="input"
              type="text"
              id="eventSpeakers"
              name="eventSpeakers"
              placeholder="Your Event's Speakers"
            />
            <label htmlFor="eventTags">Event Tags</label>
            <select className="select" type="text" id="eventTags" name="dropdown">
              <option value="Therapy">Therapy</option>
              <option value="Substance Abuse Awareness">Substance Abuse</option>
              <option value="Group Sesh">Group Session</option>
            </select>
            <input className="input-submit" type="submit" value="Submit" />
          </form>
        </Modal>
      )}
    </div>
  );
}

export default EventCreation;
