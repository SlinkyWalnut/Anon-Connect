import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { createContext } from 'react';

const UserContext = createContext(); 

function LoginCheck({children}) {
  const [isLoggedIn, isLoggedInSet] = useState(true); 
 
  return (
    <UserContext.Provider value={{ isLoggedIn }}>{children}</UserContext.Provider>
  );
}

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
