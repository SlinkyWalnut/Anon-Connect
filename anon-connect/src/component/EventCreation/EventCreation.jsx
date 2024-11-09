import React from 'react'

function EventCreation() {


  return (
    <div>
        <h1>Event Creation</h1>
        <form>
            <label for='eventName' >Event Name</label>
            <input type="text" id="eventName" name="eventName"/>
            <label for='Location' >Event Location</label>
            <input type="text" id="eventLocation" name="eventLocation"/>
            <label for='eventDate' >Event Date</label>
            <input type="date" id="eventDate" name="eventDate"/>
            <label for='eventTime' >Event Duration</label>
            <input type="date" id="eventDate" name="eventDate"/>
            <label for='eventDuration' >Event Duration</label>
            <input type="text" id="eventDuration" name="eventDuration"/>
            <label for='eventDescription' >Event Description</label>
            <input type="text" id="eventDiscription" name="eventDescription"/>
            <label for='eventSponsors' >Event Sponsors</label>
            <input type="text" id="eventSponsors" name="eventSponsors"/>
            <label for='eventSpeakers' >Event Speakers</label>
            <input type="text" id="eventSpeakers" name="eventSpeakers"/>
            <label for='eventTags' >Event Tags</label>
            <input type="text" id="eventTags" name="eventTags"/>
            <input type="submit" name="Submit"/>
        </form>



    </div>
  )
}

export default EventCreation
