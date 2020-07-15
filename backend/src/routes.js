const express = require('express')
const router = express.Router()
const { catchErrors } = require('./errorHandlers')
const continents = require ('./BL/continents.service')


router.get('/api/continents', catchErrors(continents.getContinents))

module.exports = router