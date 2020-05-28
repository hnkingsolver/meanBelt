
const {Movie} = require('../models/movies.js')
const {Rate} = require('../models/movies.js')

module.exports = {

    showMovies: (req, res) => {
        Movie.find()
            .then(data => {
                res.json({
                    message: "Success!",
                    data
                })
            })
            .catch(err => {
                res.json({
                    message: "Error!",
                    err
                })
            })
            
    },

    createMovie: (req, res) => {
        Movie.create(req.body, (error, data) => {
            if (error) {
                res.json({
                    message: "Error!",
                    error: error,
                });
            } else {
                res.json({
                    message: "Success!",
                    added: true,
                    data: data
                });
            }
        })
    },

    oneMovie: (req, res) => {
        Movie.find({
            _id: req.params.id,
        })
            .then(movie_data => {
                res.json(movie_data)
            })
            .catch(err => {
                res.json(err)
            })
    },
    
    rateMovie: (req, res) => {
        Rate.create({
            yourName: req.body.yourName,
            comment: req.body.comment,
            stars: req.body.stars
        }, (err, newRate) => {
            if (err) {
                res.json({message: "Error!", error: err});
            }
            else{
                Movie.findOneAndUpdate({_id: req.params.id},
                    {$push: {rate: comment}}, (err, data) => {
                        if(err) {
                            res.json({message: "Error!", error: err});
                        }
                        else{
                            res.json({message: "Success!", data: data});
                        }
                    })
            }
        })
    },

    //Test
    createsComment: (req, res) => {
        Rate.create(req.body, (error, comment) => {
            if (error) {
                res.json({
                    ServerMessage: "Error",
                    Error: error
                })
            } else {
                Movie.findOneAndUpdate({
                    _id: req.params.id
                }, {
                    $push: {
                        rate: comment
                    }
                }, (error, item) => {
                    if (error) {
                        res.json({
                            ServerMessage: "Error",
                            Error: error
                        })
                    } else {
                        res.json({
                            ServerMessage: "Success",
                            Item: item
                        })
                    }
                })
            }
        })
    },
    //End test

    deleteMovie: (req, res) => {
        Movie.remove({
            _id: req.params.id
        }, err => {
            if (err) {
                res.json({
                    message: "Error!",
                    error: err
                });
            } else {
                res.json({
                    message: "Delete Success!",
                    added: true
                });
            }
        })
    }
}