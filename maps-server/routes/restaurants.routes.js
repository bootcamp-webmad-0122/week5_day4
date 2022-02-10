const router = require("express").Router()

const Restaurant = require('./../models/Restaurant.model')


// New restaurante form (render)
router.get("/crear", (req, res, next) => res.render("restaurants/new-restaurant"))

// New restaurante form (post)
router.post("/crear", (req, res, next) => {

    const { name, description, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Restaurant
        .create({ name, description, location })
        .then(restaurant => res.redirect('/restaurantes/mapa'))
        .catch(err => console.log(err))
})


// Restaurants map
router.get('/mapa', (req, res, next) => res.render('restaurants/marked-map'))




module.exports = router