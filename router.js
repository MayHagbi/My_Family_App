const e = require('express')
const express = require('express')
const router = e.Router()

router.get('/', function(req, res) {
    res.render('home_page')
})

module.exports = router