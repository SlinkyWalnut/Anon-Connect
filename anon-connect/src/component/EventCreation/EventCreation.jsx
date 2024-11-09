import React from 'react'

function EventCreation() {


  return (
    <div>
        <h1>Event Creation</h1>
        <form>
            <label for='eventName' >Event Name</label>
            <input type="text" id="eventName" name="eventName"></input>
            <label for='Location' >Event Location</label>
            <input type="text" id="eventLocation" name="eventLocation"></input>
            <label for='eventDate' >Event Date</label>
            <input type="date" id="eventDate" name="eventDate"></input>
            <label for='eventTime' >Event Duration</label>
            <input type="date" id="eventDate" name="eventDate"></input>
            <label for='eventDuration' >Event Duration</label>
            <input type="text" id="eventDuration" name="eventDuration"></input>
            <label for='eventDescription' >Event Description</label>
            <input type="text" id="eventDiscription" name="eventDescription"></input>
            <label for='eventSponsors' >Event Sponsors</label>
            <input type="text" id="eventSponsors" name="eventSponsors"></input>
            <label for='eventSpeakers' >Event Speakers</label>
            <input type="text" id="eventSpeakers" name="eventSpeakers"></input>
            <label for='eventTags' >Event Tags</label>
            <input type="text" id="eventTags" name="eventTags"></input>
            <input type="submit">Submit</input>
        </form>



    </div>
  )
}

export default EventCreation
