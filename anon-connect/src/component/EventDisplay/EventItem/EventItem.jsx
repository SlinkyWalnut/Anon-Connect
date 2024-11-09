import React, {useState, useContext} from 'react'

function EventItem(props) {
  





  return (
    <div style={{borderRadius:0, color:'white', display:flex, textAlign:left, justifyContent:left}}>      
      <h1>{props.EventItem.eventTitle}</h1>
      <p>{props.EventItem.Description}</p>
      <p>{props.EventItem.Location}</p>
    </div>
  )
}

export default EventItem
