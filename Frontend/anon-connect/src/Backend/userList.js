import User from "./User.js";

export class UserFunctions{

     getAllUsersArray = async() => {
        try {
        const usersArray = await User.find(); // Fetches all users and stores them in an array
        return usersArray;
        } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
        }
    }

    getAllEventsArray = (Users) => {
        const Events = Users.map(user => ({
            
        }));
    }
}
  