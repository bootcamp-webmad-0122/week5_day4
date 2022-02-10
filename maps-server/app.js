require("dotenv/config")
require("./db")
const { capitalized } = require("./utils")


const express = require("express")
const app = express()

require("./config")(app)

const projectName = "maps-express-integration"
app.locals.title = `${capitalized(projectName)} created with IronLauncher`

require("./routes")(app)

require("./error-handling")(app)

module.exports = app