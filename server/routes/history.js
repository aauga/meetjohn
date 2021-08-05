const express = require('express');
const databaseUtils = require('../utils/index').Datastore;

const router = express.Router();

// @desc    Get previously processed images and data
// @route   GET /history
router.get('/', async (req, res) => {
    try {
        const data = await databaseUtils.getData();
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data.');
    }
});

module.exports = router;
