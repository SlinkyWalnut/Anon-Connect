import React, {useState, useContext} from 'react'

function EventItem(props) {
  





  return (
    <div style={{borderRadius:0, color:'white', display:'flex', textAlign:'left', justifyContent:'left'}}>      
      <h1>Title: {props.EventItem.eventTitle}</h1>
      <p>Description: {props.EventItem.Description}</p>
      <p>Location: {props.EventItem.Location}</p>
    </div>
  )
}

export default EventItem
