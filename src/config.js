const fs = require("fs");

// https://github.com/naturecodevoid/JSUtils/blob/master/src/config.js
/**
 * Helper class for keeping node.js JSON configs.
 *
 * @class Config
 */
class Config {
    /**
     * Creates an instance of Config.
     *
     * @param {string} path The path to the config.
     * @param {object} [defaults={}] The default config, which will be used if the config doesn't exist.
     *
     * @memberof Config
     */
    constructor(path, defaults = {}) {
        this.path = path;
        this.data = fs.existsSync(this.path) ? require(this.path) : defaults;
        for (const key in defaults) {
            if (Object.hasOwnProperty.call(defaults, key)) {
                const element = defaults[key];
                if (!Object.hasOwnProperty.call(this.data, key)) {
                    this.data[key] = element;
                }
            }
        }
        this.save();
    }

    save() {
        fs.writeFileSync(this.path, JSON.stringify(this.data, null, "    "));
    }

    // Some parts from https://github.com/yonderbread/ctson/blob/master/index.js
    set(key, val) {
        this.data[key] = val;
        this.save();
    }

    get(key) {
        return this.data[key];
    }
}

module.exports = Config;
