/**
 * Checks for duplicates in an object.
 *
 * @param {object} object The object to check for duplicates.
 *
 * @returns {object} The output object.
 */
const checkForDuplicates = (object) => {
    for (const propertyName in object) {
        if (Object.hasOwnProperty.call(object, propertyName)) {
            let property = object[propertyName];
            if (Array.isArray(property)) {
                property = property.filter((thing, index) => {
                    const thing_ = JSON.stringify(thing);
                    return (
                        index ===
                        property.findIndex((object_) => {
                            return JSON.stringify(object_) === thing_;
                        })
                    );
                });
                object[propertyName] = property;
            } else if (typeof property === "object") checkForDuplicates(property);
        }
    }

    return object;
};

module.exports = checkForDuplicates;
