import './App.css';
import Home from './component/Home/Home';
import { useState, createContext } from 'react';

export const UserContext = createContext(); 

function LoginCheck({children}) {
  const [isLoggedIn, isLoggedInSet] = useState(true); 
 
  return (
    <UserContext.Provider value={{ isLoggedIn }}>{children}</UserContext.Provider>
  );
}

function App() {
  return (
    <div className="App">
      <LoginCheck>
        <Home />

      </LoginCheck>
    </div>
  );
}

export default App;
