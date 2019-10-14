const express = require('express');
const router = express.Router();

//Include Data Model
const Data = require('../../models/Data');

//@route        GET api/data
//@description  Get all data
//@access       Public
router.get('/', (req, res) => {
    Data.find()
        .sort({ date: -1 })
        .then(data => res.json(data))
});

//@route        POST api/data
//@description  Create a data
//@access       Public
router.post('/', (req, res) => {
    const newData = new Data({
        name: req.body.name
    });

    newData.save().then(data => res.json(data));
});


//@route        DELETE api/data
//@description  Delete a data
//@access       Public
router.delete('/:id', (req, res) => {
    Data.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err=> res.status(404).json({success: false}));
});

module.exports = router;