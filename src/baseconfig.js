const fs = require("fs");

// https://github.com/naturecodevoid/JSUtils/blob/master/src/config.js
/**
 * Helper class for keeping node.js JSON configs.
 *
 * @class BaseConfig
 */
class BaseConfig {
    /**
     * Creates an instance of BaseConfig.
     *
     * @param {string} path The path to the config.
     * @param {object} [defaults={}] The default config, which will be used if the config doesn't exist.
     *
     * @memberof BaseConfig
     */
    constructor(path, defaults = {}) {
        this.path = path;
        this.data = fs.existsSync(this.path) ? require(this.path) : defaults;
        // Merge defaults into config
        // TODO: use deepmerge
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

module.exports = BaseConfig;
