import React, { useState } from 'react';
import './EventCreation.css';
import Modal from '../Modal/Modal';

function EventCreation({ openCreation, closeCreation }) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
    const eventName = e.target.eventName.value;
    const eventLocation = e.target.eventLocation.value;
    const eventDate = e.target.eventDate.value;
    const eventDuration = e.target.eventDuration.value;
    const eventDescription = e.target.eventDescription.value;
    const eventSpeakers = e.target.eventSpeakers.value;
    const eventTags = e.target.eventTags.value;

    // Create eventInfo object
    const eventInfo = {
      name: eventName,
      location: eventLocation,
      startDate: eventDate,
      duration: eventDuration,
      description: eventDescription,
      speakers: eventSpeakers,
      tags: eventTags,
      attendees: 0,
      
    };

    setIsFormSubmitted(true); // Form is submitted
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
