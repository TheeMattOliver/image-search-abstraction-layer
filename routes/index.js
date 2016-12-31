const express = require('express');
const path = require('path');
const router = express.Router();
const imgur = require('../services/imgur');
const History = require('../models/history');

// landing page
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// display 10 latest searches
router.get('/latest', (req, res) => {
  ('Querying database!');
  // empty object returns all documents
  // filter for only search term and date, so exclue _id field from results and sort in descending order
  // return onliy 10 most recent results
	History.find({}, 'search_term timestamp -_id').sort('-timestamp').limit(10).then(results => {
    res.json(results);
  })
});

// pass a string into our search
router.get('/search/:item', (req, res) =>{

  imgur.getImage(req.params.item, req.query.offset).then(data => {
    new History({ search_term: req.params.item }).save();
    res.json(data)
    console.log("Here's the data after we click that button: ", data)
  })

});

module.exports = router;