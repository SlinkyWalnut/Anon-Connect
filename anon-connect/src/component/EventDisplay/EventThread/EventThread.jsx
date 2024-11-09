import React from 'react'

import EventItem from '../EventItem/EventItem'

function EventThread() {
  
  
  
  
  
  return (
    <div>
      Event Thread
      <div style={{display:flex, justifyContent:center, alignItems:center}}>
        < EventItem 
        EventItem = {{eventTitle:"Druggies stop by", Description:"Here we help druggies go cold turkey by locking them up", Location:"My basement"}} 
        />


      </div>


    </div>
  )
}

export default EventThread
