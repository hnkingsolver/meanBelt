//change shit when u get exam
var path = require("path");
const movie = require('../controllers/movies.js')

module.exports = (app) => {
    app.get("/show", movie.showMovies)

    app.get("/show/:id", movie.oneMovie)

    app.post("/add", movie.createMovie)

    app.post('/create/:id/rate', movie.rateMovie)

    app.post('/create/:id/comment', movie.createsComment)

    app.delete("/delete/:id", movie.deleteMovie)

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}