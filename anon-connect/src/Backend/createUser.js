import User from "./User.js";

function createUser (name, password, organization, description)  {
   return new User ({
       name: name,
   password: password,
   organization: organization,
   description: description,
   })
};


export default createUser