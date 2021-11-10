const express = require('express')
const router = express.Router()
const Author = require('../models/author')

/* All Authors Route */
router.get('/', (req, res, next) => {
    res.render('authors/index',)
})

// New Author Route
router.get('/new', (req, res, next) => {
    res.render('authors/new', { author: new Author() } )
})

// Create Author Route
router.post('/', (req, res, next) => {
    res.send('Create Author')
})

module.exports = router
