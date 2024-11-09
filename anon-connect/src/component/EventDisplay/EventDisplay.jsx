import React from 'react'
import EventThread from './EventThread/EventThread'

function EventDisplay() {


    
  return (
    <div>
        <h3 className='text-5xl'>Events</h3>
        <div className='flex justify-center'>
            <div>
                <EventThread />
            </div>
            <div>
                Map
            </div>
        </div>
    </div>
  )
}

export default EventDisplay
