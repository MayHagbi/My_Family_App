const express = require("express")
const router = require('./router')
const app = express()

app.use(express.urlencoded({extended: false})) // tell express to submiting the user data in the url
app.use(express.json())

app.use(express.static('public'))
app.set('views', 'views') // let express know where to find our views
app.set('view engine', 'ejs')
app.use('/', router)

module.exports = app
