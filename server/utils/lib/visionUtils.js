const vision = require('@google-cloud/vision');

/**
 * Detect objects in image
 * @param {*} urlLink   Image URL link
 * @returns Object array of objects in image
 */
exports.detectObjects = async (urlLink) => {
    const objectList = [];
    
    try {
        const client = new vision.ImageAnnotatorClient();
        const [result] = await client.objectLocalization(urlLink);
        const objects = result.localizedObjectAnnotations;

        objects.forEach(object => {
            const index = objectList.map(ob => ob.name).indexOf(object.name);

            if(index === -1) {
                objectList.push({ name: object.name, times: 1 });
            } else {
                objectList[index].times++;
            }
        });

        return objectList;
    } catch (error) {
        console.error(error);
    }
};