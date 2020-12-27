const contactModel = require("../models/contactModel");


const getContact = async (req, res, next) => {
    contactModel.find()
    .then(data => res.json(data)) 
    .catch(error => res.status(400).json("Error: " + error)); 
};

   //   contact
const postContact = (req, res) => {  
    const {
        name, email, subject, message 
    }  = req.body; 

    const contacts  = {
        name,  
        email,
        subject,
        message
      }; 

  contactModel.create(contacts)
//   console.log(contacts)
    .then(() => res.status(200).json({message: "Message sent successfully. We will get back to you soon... Thanks"})) 
    .catch(error => res.status(400).json({error: "Message not sent. Please try again or check your inputs"})); 
};

  module.exports = {
    getContact,
    postContact
}; 