import React from 'react'
import "./EventCreation.css"; 
import Modal from '../Modal/Modal'

function EventCreation({openCreation, closeCreation}) {


  return (
    <Modal title={"Event Creation"} isOpen={openCreation} close={closeCreation}>
        <form className="event-creation-form bg-light text-white">
            <label for='eventName' >Event Name</label>
            <input className="input" type="text" id="eventName" name="eventName" placeholder="Your Event's Name"/>
            <label for='Location' >Event Location</label>
            <input className="input" type="text" id="eventLocation" name="eventLocation" placeholder="Your Event's Location"/>
            <label for='eventDate' >Event Date </label>
            <input className="input" type="date" id="eventDate" name="eventDate"/>
            <label for='eventDuration' >Event Duration</label>
            <input className="input" type="number" id="eventDuration" name="eventDuration" placeholder="Duration in Minutes"/>
            <label for='eventDescription' >Event Description</label>
            <input className="input" type="text" id="eventSponsors" name="eventSponsors" placeholder="Your Event's Sponsors"/>
            <label for='eventSpeakers' >Event Speakers</label>
            <input className="input" type="text" id="eventSpeakers" name="eventSpeakers" placeholder="Your Event's Speakers"/>
            <label for='eventTags' >Event Tags</label>
            <select className="select" type="text" id="eventTags" name="dropdown">
              <option value="Therapy">Therapy</option>
              <option value="Substance Abuse Awareness">Substance Abuse</option>
              <option value="Group Sesh">Group Session</option>
              </select>
            <input className="input-submit" type="submit" value="Submit"/>
        </form>

    </Modal>
  )
}

export default EventCreation
