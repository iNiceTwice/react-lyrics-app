const express = require("express")
const path = require("path")
const routes = require("./routes/routes.js")
const app = express()

//middlewares
app.use(express.urlencoded({ extended: false }))//change to true
app.use(express.json())

//static files
app.use(express.static(path.join(__dirname,"public")))

//routes
app.use("/", routes)

//server settings
app.set("port", process.env.PORT || 3000)
app.listen(app.get("port"),()=>{console.log("- Server Online -")})