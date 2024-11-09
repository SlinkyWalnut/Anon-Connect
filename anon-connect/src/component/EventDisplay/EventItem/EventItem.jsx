import { useState } from 'react';
import Profile from '../../Profile/Profile';
function EventItem({ name, description, attendees = 0, location }) {
  const [actionClicked, setActionClicked] = useState(null);
  const [rsvpCount, setRsvpCount] = useState(attendees);
  const [rsvpClicked, setRsvpClicked] = useState(false);

  const handleRsvpClick = () => {
    if (!rsvpClicked) {
      setRsvpCount(rsvpCount + 1);
      setRsvpClicked(true);
    }
  };

  return (
    <div>
    {actionClicked === 'Profile' ? (
        <Profile />
      ) :<div className="w-screen h-screen flex justify-center items-center bg-gray-50 p-6 bg-white shadow-lg rounded-lg flex gap-8">
          <div className="flex flex-1 space-y-4">
          {/* Left Side Content */}
          <div className="flex-1">
            {/* Event Details */}
            <div>
              <h2 className="font-bold text-2xl mb-2">{name}</h2>
              <p className="text-gray-600 mb-4">{description}</p>
            </div>

            {/* About Host */}
            <div
              onClick={() => setActionClicked('Profile')}
              className="cursor-pointer bg-indigo-100 text-indigo-700 font-semibold p-4 rounded-lg mb-4 hover:bg-indigo-200 transition"
            >
              About Host
            </div>

            {/* Host Reviews */}
            <div className="border-t pt-4 space-y-2">
              <h2 className="font-semibold text-lg">Host Reviews</h2>
              <div className="space-y-1">
                <p className="text-gray-600">"Great event!" - User 1</p>
                <p className="text-gray-600">"Very informative." - User 2</p>
              </div>
            </div>

            {/* Location */}
            <div className="text-gray-500 text-sm mt-4">
              <p>{location}</p>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-1/3 space-y-4">
            {/* Map placeholder */}
            <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-center text-gray-500">Map (Google Maps)</p>
            </div>

            {/* RSVP Section */}
            <div className="flex flex-col items-center">
              <button
                onClick={handleRsvpClick}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                RSVP!
              </button>
              <p className="text-xs text-gray-600 mt-1">Attendees: {rsvpCount}</p>
            </div>
          </div>
        </div>

    </div>
    } 
    </div>
  );
}

export default EventItem;
