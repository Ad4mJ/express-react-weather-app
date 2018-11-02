'use strict';

const express = require('express');
const router = express.Router();
const weatherService = require('../services/weather.server.service');

router.get('/message', (req, res, next) => {
  res.json('Welcome To React');
});

router.get('/weather', async (req, res, next) => {
    if(!req.query.lat || !req.query.lon) 
        return res.status(400);
    
    const weatherResults = await weatherService.getWeather(req.query.lat, req.query.lon);
    res.json(weatherResults);
});

module.exports = router;