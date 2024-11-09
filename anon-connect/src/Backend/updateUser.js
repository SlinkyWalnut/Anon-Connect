
    export class UserEvents {
         addUserEvents = async (User,itemId, meet) =>  {
            try{
                const result = await User.updateOne(
                    { _id: itemId }, // Find the document by ID or any other condition
                    { $push: { Events: meet } } // Add a new tag to the tags array
                );
                return result;
            }catch (error) {
                console.error('Error updating item:', error);
                throw error;
            }
        }
        
        deleteUserEvents = async (User, itemId, eventId) => {
            try {
                const result = await User.updateOne (
                    {_id: itemId},
                    { $pull: { Events: {_id : eventId}}}
                );
            }catch (error) {
                console.error('Error deleting event:', error);
                throw error;
            }
        }
    }
    
    

    export class UserReviews {
         addUserReviews = async (User, itemId, meet, review) => {
            try{
                const result = await User.updateOne(
                    {_id: itemId, 'Events._id': meet},
                    { $push: {'Events.$.Reviews': review}}
                );
                return result;
            }catch (error ){
                console.error('Error Adding Review', error);
                throw error;
            }
        }
    }
    