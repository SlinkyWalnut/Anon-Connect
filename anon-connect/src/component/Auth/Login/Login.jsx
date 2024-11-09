import React, { useState } from 'react';
import Registration from "../Registration/Registration";
import Profile from '../../Profile/Profile';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [clickedAction, setClickedAction] = useState("home");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const displayLogin = () => {
    if (clickedAction === "signup") {
      return <Registration />;
    } else if (clickedAction === "hasLoggedIn") {
      return <Profile />;
    } else {
      return (
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
              <span>Don't have an account?</span> <span onClick={() => setClickedAction("signup")} className='text-blue-700 hover:underline cursor-pointer'>Sign up</span>
            </div>
          </form>
        </div>
      );
    }
  };

  return (
    <div>
      {displayLogin()}
    </div>
  );
}

export default LoginForm;
