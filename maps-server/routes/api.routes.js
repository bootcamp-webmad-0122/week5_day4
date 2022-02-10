const router = require("express").Router()

const Restaurant = require('./../models/Restaurant.model')

router.get("/restaurants", (req, res, next) => {

    Restaurant
        .find()
        .then(allRestaurants => res.json(allRestaurants))
        .catch(err => console.log(err))
})

module.exports = router