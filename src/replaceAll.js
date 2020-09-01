// https://github.com/naturecodevoid/JSUtils/blob/master/src/replaceAll.js
/**
 * Replaces text in a string.
 *
 * @param {string} string The string to replace.
 * @param {string} search A object can search for and replace matches within a string.
 * @param {string} replace A string containing the text to replace for every successful match of searchValue in this string.
 *
 * @returns {string} The output string.
 */
const replaceAll = (string, search, replace) => {
    return string.split(search).join(replace);
};

/**
 * Replaces text in a string.
 *
 * @param {string} search A object can search for and replace matches within a string.
 * @param {string} replace A string containing the text to replace for every successful match of searchValue in this string.
 *
 * @returns {string} The output string.
 */
String.prototype.replaceAll = function(search = "", replace = "") {
    return replaceAll(this, search, replace);
};

module.exports = replaceAll;
