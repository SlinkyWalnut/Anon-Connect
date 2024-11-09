import React, { useState, useEffect, useContext } from 'react';
import Registration from "../Registration/Registration";
import Profile from '../../Profile/Profile';
import { UserContext } from '../../../App';

function LoginForm() {
  const { user, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openRegister, setOpenRegister] = useState(false);
  const [clickedAction, setClickedAction] = useState("home");
  const [showProfile, setShowProfile] = useState(false);
  
  useEffect(() => {
    if(isLoggedIn) {
      setShowProfile(true);
    }
  }, isLoggedIn);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
    if(username && password){
      if(user.username === username && user.password === password){
        setIsLoggedIn(true);
      }
    }
  };
  const registerClicked = () => {
    setOpenRegister(!openRegister)
  }
  const handleRegistrationComplete =() => {
    setIsLoggedIn(true);
    setShowProfile(true);
  }
  if(showProfile){
    return <Profile />;
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl mb-4">Log in</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setClickedAction("hasLoggedIn")}
              className="bg-blue-500 mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Log in
            </button>
          </div>
          <div>
            <span>Don't have an account?</span> <span onClick={registerClicked} className='text-blue-700 hover:underline cursor-pointer'>Sign up</span>
          </div>
        </form>
      </div>
      <Registration openRegister={openRegister} closeRegister={setOpenRegister} setLogin={handleRegistrationComplete}/>
    </div>
  );
}

export default LoginForm;
