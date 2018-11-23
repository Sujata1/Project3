const db = require('../models');
const jwt = require('jsonwebtoken');

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        db.UserRating
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res) {
        db.UserRating
            .findOne({
                useremail: req.body.useremail,
                articleurl: req.body.articleurl
            })
            .then(dbUserRating => {
                res.json(dbUserRating)
            })
            .catch(err => {
                res.json({
                    validate: false,
                    status: '422',

                });

            });
    },

    create: function (req, res) {
        db.UserRating
            .findOne({
                useremail: req.body.useremail,
                articleurl: req.body.articleurl
            })
            .then(data => {
                if (!data) {
                    db.UserRating
                        .create(req.body)
                        .then(dbUser => {
                            res.json('User Rating Updated');
                        })
                }

            })
    }
}

