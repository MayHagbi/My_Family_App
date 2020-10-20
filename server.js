const express = require("express")
const app = express()

app.use(express.static('public'))
// let express know where to find our views
app.set('views', 'views')
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('home_page')
})

app.listen(5000)
