const axios = require('axios');
const sharp = require('sharp');
const { imageHash } = require('image-hash');
const { Storage } = require('@google-cloud/storage');

/**
 * Upload image to storage
 * @param {*} imageUrl  Image hash
 * @returns Object properties .url and .hash (image URl and hash)
 */
exports.uploadImage = (imageUrl) => {
    return new Promise((resolve, reject) => {
        const storage = new Storage();

        axios({
            method:'GET',
            url: imageUrl,
            responseType:'stream'
        })
        .then((response) => {
            // Create the image manipulation function
            const transformer = sharp().resize(500).jpeg();

            // Hash the image            
            imageHash(imageUrl, 16, true, (error, hash) => {
                if (error) {
                    reject(error);
                    throw new Error(error);
                }

                const gcFile = storage.bucket(process.env.GOOGLE_STORAGE_BUCKET_NAME).file(hash + '.jpg');

                // Pipe the axios response data through the image transformer and to Google Cloud
                response.data
                    .pipe(transformer)
                    .pipe(gcFile.createWriteStream({
                        resumable  : false,
                        validation : false,
                        contentType: "auto",
                        metadata   : {
                            'Cache-Control': 'public, max-age=31536000'}
                    }))
                    .on('error', (error) => {
                        reject(error);
                    })
                    .on('finish', () => {
                        resolve({
                            hash: hash,
                            url: `https://storage.googleapis.com/${process.env.GOOGLE_STORAGE_BUCKET_NAME}/${gcFile.metadata.name}`
                        });
                    });
            });
        })
        .catch(error => {
            reject(error);
        });
    })
}

/**
 * Delete image from storage
 * @param {*} imageUrl  Image hash
 */
exports.deleteImage = async (hash) => {
    const storage = new Storage();

    try {
        await storage.bucket(process.env.GOOGLE_STORAGE_BUCKET_NAME).file(hash + '.jpg').delete();    
    } catch (error) {
        console.error(error);
    }
}