const mongoose = require('mongoose')

const RateSchema = new mongoose.Schema({
    yourName: {
        type: String,
        required: [true, "Your name is required"],
        minlength: [3, "Your name must be at least 3 characters"]
    },
    stars: {
        type: Number,
        required: [true, "Rate is required"]
    },
    comment: {
        type: String,
        required: [true, "Review is required"],
        minlength: [3, "Movie review must be at least 3 characters long"]
    },
})

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Movie title is required"],
        minlength: [3, "Movie title must be at least 3 characters long"]
    },
    rate: [RateSchema]
})

module.exports = {
    Movie: mongoose.model('Movie', MovieSchema),
    Rate: mongoose.model('Rate', RateSchema)
}