import React, { useState } from 'react';

function EventThread({ description, location, name }) {
  return (
    <div className='border my-4 border-warm-gray rounded-lg p-4 shadow-custom-light transition-transform transform hover:scale-105 hover:shadow-custom-dark hover:bg-peach duration-300 ease-in-out'>
      <h2 className='text-bright-blue font-semibold text-2xl mb-3'>{name}</h2>
      <p className='text-dark text-lg mb-2'>{description}</p>
      <p className='text-secondary text-sm'>Location: {location}</p>
    </div>
  );
}

export default EventThread;
