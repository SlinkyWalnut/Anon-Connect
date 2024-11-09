import React, { useState } from 'react';
import EventThread from './EventThread/EventThread';
import EventItem from './EventItem/EventItem';

function EventDisplay() {
    const [currentItem, setCurrentItem] = useState(null); // Track clicked item
    
    const eventsList = [
        {
            description: "Event for druggies to become clean.",
            location: "12345 street ave",
            name: "Cold turkey",
            attendees: 0
        },
        {
            description: "Event for alcoholics to become clean.",
            location: "67890 ave",
            name: "More drugs",
            attendees: 0
        }
    ];

    const handleItemClick = (event_thread) => {
        setCurrentItem(event_thread); // Set clicked item to state
    };

<<<<<<< HEAD
    return (
        currentItem ? (
            <EventItem
                description={currentItem.description}
                location={currentItem.location}
                name={currentItem.name}
            />
        ) : (
            <div>
                <h3 className='text-5xl my-8'>Events</h3>
                <div className='flex justify-center my-8'>
                    <div className='p-2 mx-6 border border-black rounded-md'>
                        {eventsList.map(event_thread => (
                            <div 
                                key={event_thread.name}
                                onClick={() => handleItemClick(event_thread)} 
                                className='cursor-pointer'
                            >
                                <EventThread 
                                    description={event_thread.description} 
                                    location={event_thread.location} 
                                    name={event_thread.name}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='flex display-left'>
                    </div>
                </div>
=======
  return (
    <div>
        <h3 className='text-5xl my-8'>Events</h3>
        <div className='flex justify-center my-8'>
            <div className='p-2 mx-6 border border-black rounded-md'>
                {eventsList.map(event => (
                    <EventThread description ={event.description} location={event.location} name={event.name}/>

                ))}
>>>>>>> 3eea48c85946aca2a3780c26b86b44c59e2ddfba
            </div>
        )
    );
}

export default EventDisplay;

