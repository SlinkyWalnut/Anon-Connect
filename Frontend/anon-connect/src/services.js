import axios from 'axios'

const LOCAL_URL = 'http://localhost:5000';
const LOCAL_URL_BASE = `${LOCAL_URL}/api/v1/we-detox`;
const LOCAL_URL_USERS = `${LOCAL_URL_BASE}/users`;
const LOCAL_URL_ACCOUNTS = `${LOCAL_URL_BASE}/accounts`;
const LOCAL_URL_EVENTS = `${LOCAL_URL_BASE}/events`;


export class User {
    constructor(){
        this.id = '';
        this.accountId = '';
        this.name = '';
        this.organization = '';
        this.description = '';
        this.website = '';
        this.contact = [];
        this.rating = 0;
        this.isLoggedIn = false;
    }
    setIsLoggedIn = (loggedIn) => {this.isLoggedIn = loggedIn}
    setUserData = (userData, accountId) => {
        const {name, organization, description, website, contact, rating, _id} = userData;
        this.name = name;
        this.organization = organization;
        this.description = description;
        this.website = website;
        this.contact = contact;
        this.rating = rating;
        this.id=_id;
        this.accountId = accountId;
    }
}


export class AuthService extends User{
    logoutUser (){
        this.id = '';
        this.accountId = '';
        this.name = '';
        this.organization = '';
        this.description = '';
        this.website = '';
        this.contact = [];
        this.rating = 0;
        this.isLoggedIn = false;
    }

    createAccount = async (userLogin) => {
        try {
            const response = await axios.post(LOCAL_URL_ACCOUNTS, userLogin);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
    getAccounts = async () => {
        try {
            const response = await axios.get(LOCAL_URL_ACCOUNTS);
            return response;
            
        } catch (error) {
            console.error(error);
            throw error;
            
        }
    }
    findUserByName = async (username) => {
        try {
            const response = await axios.get(`${LOCAL_URL_USERS}/findUsername/${username}`);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    loginUser = async(username, password) => {
        await this.getAccounts().then((res) => {
            const {data} = res.data;
            data.forEach((account) => {
                if (account.name === username && account.password === password) {
                    console.log(account);
                    this.findUserByName(account.name).then((targetUser) => {
                        const {user} = targetUser.data;
                        this.setUserData(user, user._id);
                    })
                    this.setIsLoggedIn(true);
                    return true;
                } 
                console.log("No user with email " + username + " or wrong password.");
                return false;
            })
        })
       }
       
       addUser = async (userDetails) => {
           const {name, organization, description, website, contact, rating} = userDetails;
           const user = {
               "name": name,
               "organization": organization, 
               "description": description,
               "website": website,
               "contact": contact,
               "rating": rating,
           }
    
           try {
               await axios.post(LOCAL_URL_USERS, user);
           } catch (error) {
               console.error(`Error: ${error}`);
               throw error;
           }
       }
       getUsers = async () => {
           try {
               const response = await axios.get(LOCAL_URL_USERS);
               return response;
           } catch (error) {
                console.error(error);
               throw error;
           }
       }

}


export class EventService {
    constructor(){
        this.events = [];
    }
    postEvent = async (eventInfo) => {
        try {
            const response = await axios.post(LOCAL_URL_EVENTS, eventInfo);
            if (response.data.success) {
                return response.data.event;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    getAllEvents = async () => {
        try {
            const response = await axios.get(LOCAL_URL_EVENTS);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    getEvent = async (eventId) => {
        try {
            const event = await axios.get(`${LOCAL_URL_EVENTS}/${eventId}`);
            return event;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    addEventRating = async () => {
        
    }
    
}
