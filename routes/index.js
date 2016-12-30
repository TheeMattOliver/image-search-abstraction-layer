const express = require('express')
const router = express.Router();
const imgur = require('../services/imgur');

// landing page
router.get('/', (req, res) => {
	res.send('Hello world!');
})

// display 10 latest searches
router.get('/latest', (req, res) => {

});

// pass a string into our search
router.get('/search/:item', (req, res) =>{

  imgur.getImage(req.params.item, req.query.offset).then(data => {
    res.json(data)
  })

});

module.exports = router;