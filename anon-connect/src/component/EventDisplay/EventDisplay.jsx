import React, {useState} from 'react'
import EventThread from './EventThread/EventThread'
function EventDisplay() {
    const eventsList = [
        {
            description: "Event for druggies to become clean.",
            location: "12345 street ave",
            name: "Cold turkey",
            attendees: 0
            
        },
        {
            description: "Event for alcholoics to become clean.",
            location: "67890 ave",
            name: "More drugs",
            attendees: 0
        }
    ]


  return (
    <div>
        <h3 className='text-5xl my-8'>Events</h3>
        <div className='flex justify-center my-8'>
            <div className='p-2 mx-6 border border-black rounded-md'>
                {eventsList.map(event => (
                    <EventThread description ={event.description} location={event.location} name={event.name}/>

                ))}
            </div>
            <div className='flex display-left '>
            
            </div>
        </div>
    </div>
  
)
}

export default EventDisplay
