import './App.css';
import Home from './component/Home/Home';
import { useState, createContext } from 'react';

export const UserContext = createContext(); 

function UserProvider({children}) {
  const [userContext, setUserContext] = useState({
    user:{
      username: '',
      password: '',
      organization: '',
      website: '',
      description: ''
    },
    isLoggedIn: false
  }); 
  const context = {
    user: userContext.user,
    isLoggedIn: userContext.isLoggedIn,
    setUser: (targetUser) => {
      setUserContext({...userContext, user: targetUser});
    },
    setIsLoggedIn: (status) => {
      setUserContext({...userContext, isLoggedIn: status})
    }
  }
 
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
