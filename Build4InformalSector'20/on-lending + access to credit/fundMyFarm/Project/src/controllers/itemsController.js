const multer = require('multer');
const Fleet = require("../models/itemsModel");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/jwtConfig");
// const { upload } = require("../utility/multer");
// const responseHandler = require('../utility/responseHandler');
const fs = require('fs');
const path = require('path');
// const sharp = require('sharp');


// get all fleets
const getFleets = async (req, res, next) => {
   Fleet.find()
   .then(data => {
    jwt.verify(req.token, jwtSecret.secret, data, (err, authorizedData) => {
      if(err){
          console.log('ERROR: Could not connect to the fleets route');
          res.sendStatus(403);
      } else {
          res.status(200).json({message: "Welcome to fleets garrage"});
          console.log('SUCCESS: Connected to Fleets');
      }
  })
  });
//    .then((data) => {
//        console.log(data)
//        res.status(200).json({message: "Welcome to fleets garrage"})

// });
};


//   post fleets
const postFleets =  async (req, res) => {

    const { name, desc, ownerNumber, ownerEmail, ownerContact, image, } = req.body

    const newFleet = new Fleet({
        image,
        name,
        desc,
        ownerNumber,
        ownerEmail,
        ownerContact,
    })

    newFleet
    .save()
    .then(() =>{
        return res.json("File Uploaded Successfully!");
    })
    .catch((error) =>{
        console.log(error);
    });
};

// show one fleet
const showFleet = async (req, res, next) => {
    Fleet.findById(req.params.id)
      .then(fleet => res.json(fleet))
      .catch(err => res.status(400).json('Error: ' + err));
  };


// edit route
const editFleet = async (req, res, next) => {
    Fleet.findById(req.params.id, (err, foundFleet) =>{
        if(err){
            // res.redirect("/fleets")
            console.log(err)
        } else{
            // res.render("edit", {fleet: foundFleet})
            res.json(foundFleet)
        }
    });
};

  //   update fleet
  const updateFleet = (req, res, next) => {
    Fleet.findById(req.params.id)
      .then(fleet => {
        fleet.name = req.body.name
        fleet.description = req.body.description
        fleet.ownerNumber = req.body.ownerNumber
        fleet.ownerContact = req.body.ownerContact
        fleet.ownerEmail = req.body.ownerEmail
        fleet.image = req.body.image

        fleet.save()
          .then(() => res.json(`'Exercise updated!'`))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  };

//   delete
const deleteFleet = async (req, res, next) => {
    Fleet.findByIdAndRemove(req.params.id)
      .then(() => res.json(`${req.params.id}: deleted`))
      .catch(err => res.status(400).json('Error: ' + err));
  };


module.exports = {
    postFleets,
    getFleets,
    showFleet,
    editFleet,
    updateFleet,
    deleteFleet

};
