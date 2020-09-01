require("./replaceAll.js");
/* !!! Requires replaceAll.js !!! */

/**
 * Executes a template literal
 *
 * @param {string} string The string to execute
 * @param {Array} args An array of argument values (in order)
 * @param {Array<string>} argNames An array of argument names (same order as `args`, the names of variables in your string)
 * @param {boolean} replace$ If {value} should become ${value}
 *
 * @returns {string} The output string.
 */
const executeTemplateLiteral = (string, args, argNames, replace$ = false) => {
    let temporary = `${string}`;
    if (replace$)
        temporary = temporary
            .replaceAll("{", "${")
            .replaceAll("${{", "${")
            .replaceAll("$$", "$");
    return new Function(...argNames, `return \`${temporary}\`;`)(...args);
};

module.exports = executeTemplateLiteral;
