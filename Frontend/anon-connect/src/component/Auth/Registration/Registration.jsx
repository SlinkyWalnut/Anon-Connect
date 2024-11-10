import React, {useState, useContext} from 'react'
import Modal from '../../Modal/Modal';
import { UserContext } from '../../../App';
import Profile from '../../Profile/Profile';

function getRandomInteger() {
  const min = 3;
  const max = 5;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Registration({openRegister, closeRegister, setLogin}) {
  const {setUser, isLoggedIn, setIsLoggedIn, authService} = useContext(UserContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [organization, setOrganization] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const INIT_ERROR = {
    "name": '',
    "password": '',
 }

 const [errorText, setErrorText] = useState(INIT_ERROR);
 const newInfo = {
  "name": username,
  "password": password
 }
 const userInfo = {
  name: username,
  organization,
  description,
  website,
  contact: [],
  rating: getRandomInteger()
 }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username.length && password.length){
      setUser({
        username,
        password,
        organization,
        website,
        description
      })
      authService.findUserByName(username).then(() => {
        setErrorText({...errorText, name: 'This username has been taken.'})
      }).catch((err) => {
        setErrorText({...errorText, name: ''})
        authService.createAccount(newInfo).then(() => {
          authService.addUser(userInfo).then(() => {
            authService.loginUser(username, password).then(() => {
              return <Profile hostId={authService.id}/>
              setErrorText(INIT_ERROR);
            }).catch((err) => {
              console.error('error in logging in user', err);
            })
          }).catch((err) => {
            console.error("error in adding user", err);
          })
        }).catch((err) => {
          console.error("error in registering account", err);
        })
      })
      setUsername("");
      setPassword("");
      setOrganization("");
      setWebsite("");
      setDescription("");
      closeRegister();
      setLogin(true);
      setIsLoggedIn(true);
    }
  };

  return (
    <Modal title="Registration" isOpen={openRegister} close={closeRegister}>
        <form onSubmit={handleSubmit} className="rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-white text-left text-sm font-bold mb-2" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-left text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-left text-sm font-bold mb-2" htmlFor="organization">Organization</label>
            <input
              id="organization"
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Enter your organization"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-left text-sm font-bold mb-2" htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Enter your website"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-left text-sm font-bold mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Enter a brief description"
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-auto rounded px-4">Register</button>
          </div>
        </form>

    </Modal>
  );
}

export default Registration
