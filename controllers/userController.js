const db = require("../models");
const jwt = require("jsonwebtoken");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
  
    db.User
      .findOne({ email: req.body.email,
              password: req.body.password})
      .then(dbUser => {
        console.log("user found");
        console.log(dbUser);
        if (dbUser !== null) {
             
          var user = dbUser.username;
          jwt.sign({ user }, 'secretkey', { expiresIn: '300s' }, (err, token) => {
              console.log("token: " + token);
              res.json({
                  validate: true,
                  message: 'Welcome ' + dbUser.firstname,
                  token: token,
                  id: dbUser.id,
                  username: dbUser.username,
                  email: dbUser.email
              });
          });
      } else {
        console.log("user null in signin");
          res.json({
              validate: false,
             status: "422",
          
          });
      }
      
      })
      .catch(err =>{ 
        res.json({
          validate: false,
         status: "422",
      
      });
      
      });
  },
  create: function (req, res) {
   
    db.User
      .create(req.body)
      .then(dbUser =>{ 
        
        if (dbUser !== null) {
             
          var user = dbUser.username;
          jwt.sign({ user }, 'secretkey', { expiresIn: '300s' }, (err, token) => {
            
              res.json({
                  validate: true,
                  message: 'Welcome ' + dbUser.firstname,
                  token: token,
                  id: dbUser.id,
                  username: dbUser.username,
                  email: dbUser.email
              });
          });
      } else {
        console.log("user null in create");
          res.json({
              validate: false
          });
      }
        
        res.json(dbModel)
      
      })
      .catch(err => {
        res.json({
          status: "422",
          validate: false
      });
      });
  },
};
