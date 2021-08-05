const express = require('express');
const databaseUtils = require('../utils/index').Datastore;
const storageUtils = require('../utils/index').Storage;

const router = express.Router();

// @desc    Show image details
// @route   GET /details/:id
router.get('/:hash', async (req, res) => {
    const hash = req.params.hash;

    try {
        const data = await databaseUtils.getImageData(hash);
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data.');
    }
});

// @desc    Delete image from storage and database
// @route   DELETE /details/:id
router.delete('/:hash', async (req, res) => {
    const hash = req.params.hash;

    try {
        await databaseUtils.deleteImageData(hash);
        await storageUtils.deleteImage(hash);
        res.status(200).send('Successfully deleted image data.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to delete image data.');
    }
});

module.exports = router;
