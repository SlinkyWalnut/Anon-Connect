import React, {useState, useEffect, useContext} from 'react'; 
import "./Profile.css"; 
import {UserContext} from '../../App.js'; 
import EventCreation from '../EventCreation/EventCreation.jsx';
import EventThread from '../EventDisplay/EventThread/EventThread.jsx';

function Profile() {
  // const [userInfo, setUserInfo] = useState(null); 
  const {isLoggedIn} = useContext(UserContext);
  const [eventsClicked, setEventsClicked] = useState(false); 
  const handleEventsClicked = () => {
    setEventsClicked(true); 
  }

  const user = {organization: "Alcoholics Anonymous", description: "We host continuous meeting for recovering alcoholics!", location: "4531 Druggie Ave", rating: 5, events: [{name: "Consultation", completed: true}, {name: "Group Therapy", completed: true}, {name: "Movie Night", completed: false}, {name: "Pizza and Chat", completed: false}], contactInfo: "123-456-7890"}; 
  // const users = [
  //   {organization: "Alcoholics Anonymous", description: "We host continuous meeting for recovering alcoholics!", rating: 5, events: ["hi", "hi2"], contactInfo: "123-456-7890"},
  //   {organization: "Narcotics Anonymous", description: "We host continuous meeting for recovering drug addicts!", rating: 5, events: ["hi", "hi2"], contactInfo: "123-456-7894"}
  // ];

  useEffect(() => {

  })

  const completedEvents = user.events.filter(hosting => hosting.completed);
  const currentEvents = user.events.filter(hosting => !hosting.completed);

if(eventsClicked){
<EventCreation />
}else{
  return (
    <div className="profileContainer">
      <h1>{user.organization}</h1>
      <p>{user.description}</p>
      <div className='events'>
        <div className="leftSide">
          <h2>Current Events</h2>
          <ul className="eventsContainer">
            {completedEvents.map((hosting) => (
              <li>
                <EventThread description={hosting.description} location={hosting.location}/>
              </li>
            ))}
          </ul>
          <h2>Past Events</h2>
          <ul className="eventsContainer">
            {currentEvents.map((hosting) => (
              <li>
                <EventThread description={hosting.description} location={hosting.location}/>
              </li>
            ))}
          </ul>
          {isLoggedIn && <button className='rounded-lg mr-4 bg-blue-700 text-white p-2 hover:opacity-70' onClick={handleEventsClicked}>Add Event</button>}
        </div>
        <div className="rightSide">
          <h2>Rating</h2>
          <p>{user.rating}</p>
          <h2>Contact Us!</h2>
          <p>{user.contactInfo}</p>
        </div>
        </div>
      </div>

  )
}
}

export default Profile
