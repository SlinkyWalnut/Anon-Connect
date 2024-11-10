import './App.css';
import Home from './component/Home/Home.jsx';
import { useState, createContext } from 'react';
import { AuthService } from './services.js';

export const UserContext = createContext(); 

const authService = new AuthService();
const eventService = new EventService(); 

function UserProvider({children}) {
  const [userContext, setUserContext] = useState({
    user: {
      username: '',
      password: '',
      organization: '',
      about: '',
      website: '',
      contact: '', 
      events: [
        {
          name: '',
          location: '',
          startTime: '',
          duration: '',
          description: '',
          sponsors: '',
          tags: '',
          reviews: [
            {
              rating: 0,
              description: ''
            }
          ],
          completed: false
        }
      ], 
      rating: ''
    },
    isLoggedIn: false
  });
  const context = {
    authService,
    eventService,
    user: userContext.user,
    isLoggedIn: userContext.isLoggedIn,
    setUser: (targetUser) => {
      setUserContext({...userContext, user: targetUser});
    },
    setIsLoggedIn: (status) => {
      setUserContext({...userContext, isLoggedIn: status})
    },
    addEvent: (newEvent) => {
      setUserContext((prevContext) => ({
        ...prevContext,
        user: {
          ...prevContext.user,
          events: [...prevContext.user.events, newEvent]
        }
      }));
    },
    addReviewToEvent: (eventName, newReview) => {
      setUserContext((prevContext) => {
        const updatedEvents = prevContext.user.events.map(event => {
          if (event.name === eventName){
            return {
              ...event,
              reviews: [...event.reviews, newReview]
            };
          }
        });

        return {
          ...prevContext,
          user: {
            ...prevContext.user,
            events:updatedEvents
          }
        };
      });
    }
  };
 
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Home />

      </UserProvider>
    </div>
  );
}

export default App;
