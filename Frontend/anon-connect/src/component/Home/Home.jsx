import React, { useState } from 'react'
import "./Home.css"
import EventDisplay from '../EventDisplay/EventDisplay';
import Login from '../Auth/Login/Login';
function Home() {
  const [actionClicked, setActionClicked] = useState("home");

  const handleClicks = () => {
    if (actionClicked === 'organizer') {
      return <Login />;
    } else if (actionClicked === 'events') {
      return <EventDisplay />;
    } else {
      return (
        <div className="relative min-h-screen bg-gradient-to-r from-primary to-secondary flex flex-col justify-center items-center text-center p-6">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-6xl text-white font-bold transform transition duration-500 ease-in-out hover:scale-110">
              We Detox
            </h2>
            <h2 className="text-3xl text-white font-semibold">
              About Us
            </h2>
            <p className="max-w-md mx-auto text-white opacity-80 transition-opacity duration-300 hover:opacity-100">
              <span className="font-bold">Problem: </span>Millions of people are struggling with substance abuse disorder every day, locked in an uphill battle that is only exacerbated by a lack of community and resources that could support them.
            </p>
            <p className="max-w-md mx-auto my-4 text-white opacity-80 transition-opacity duration-300 hover:opacity-100">
              <span className="font-bold">Solution: </span>We are an event-hosting application that strives to connect people suffering from substance abuse to each other as well as to medical organizations that promote growth and wellness.
            </p>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => setActionClicked('organizer')}
              className="transition-all duration-300 transform hover:scale-105 rounded-lg bg-primary text-white text-lg py-3 px-8 shadow-lg hover:shadow-xl focus:outline-none"
            >
              Organizer
            </button>
            <button
              onClick={() => setActionClicked('events')}
              className="transition-all duration-300 transform hover:scale-105 rounded-lg bg-accent text-white text-lg py-3 px-8 shadow-lg hover:shadow-xl focus:outline-none"
            >
              Events
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {handleClicks()}
    </div>
  );
}

export default Home;
