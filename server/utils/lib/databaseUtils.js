const { Datastore } = require('@google-cloud/datastore');

/**
 * Store image data to database
 * @param {*} data      Object with image URL and hash properties
 * @param {*} objects   Array of objects in the image
 */
exports.sendData = async (data, objects) => {
    const datastore = new Datastore();

    try {
        const key = datastore.key(['images', `${data.hash}`]);
        const image = {
            key: key,
            data: {
                hash: `${data.hash}`,
                url: `${data.url}`,
                objects: objects,
                created: Date.now()
            },
        };

        await datastore.save(image);
    } catch (error) {
        console.error(error);
    }
};

/**
 * Retrieve data of every image from database
 * @returns Sorted object array with image data
 */
exports.getData = async () => {
    const datastore = new Datastore();

    // Sort image data from newest to oldest
    function compare(a, b) {
        if(a.created > b.created) {
            return -1;
        } else if(a.created < b.created) {
            return 1;
        }
    
        return 0;
    }

    try {
        const query = datastore.createQuery('images');
        const [images] = await datastore.runQuery(query);

        return images.sort(compare);
    } catch (error) {
        console.error(error);
    }
};

/**
 * Get data of image from database
 * @param {*} hash      Image hash
 * @returns Object with image data
 */
exports.getImageData = async (hash) => {
    const datastore = new Datastore();

    try {
        const key = datastore.key(['images', hash]);
        const data = await datastore.get(key);

        return data[0];
    } catch (error) {
        console.error(error);
    }
};

/**
 * Delete image data from database
 * @param {*} res       Express app response object
 * @param {*} hash      Image hash
 */
exports.deleteImageData = async (hash) => {
    const datastore = new Datastore();

    try {
        const key = datastore.key(['images', hash]);
        await datastore.delete(key);
    } catch (error) {
        console.error(error);
    }
}