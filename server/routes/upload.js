const express = require('express');
const storageUtils = require('../utils/index').Storage;
const visionUtils = require('../utils/index').Vision;
const databaseUtils = require('../utils/index').Datastore;

const router = express.Router();

// @desc    Upload image to storage and database
// @route   POST /
router.post('/', async (req, res, next) => {
    try {
        const data = await storageUtils.uploadImage(req.body.imageUrl);
        console.log(`[1/3] Successfully uploaded image to the storage. (hash: ${data.hash})`);

        const objects = await visionUtils.detectObjects(data.url);
        console.log('[2/3] Successfully detected image objects.');

        await databaseUtils.sendData(data, objects);
        console.log('[3/3] Successfully uploaded data to the database.');

        res.status(200).send({ hash: data.hash, imageUrl: data.url, objects: objects });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error uploading image.');
    }
});

module.exports = router;
