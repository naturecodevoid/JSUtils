# JSUtils

[![](https://img.shields.io/github/license/naturecodevoid/JSUtils?style=flat-square)](https://github.com/naturecodevoid/JSUtils/blob/master/LICENSE)
[![](https://img.shields.io/npm/v/JSUtils?style=flat-square)](https://www.npmjs.com/package/JSUtils)

Random javascript utilities you might find useful.

## Features

---

-   ```js
    "aaa".replaceAll("a", "b");
    // => bbb
    ```

    A fix for `"aaa".replace("a", "b"); // => "baa"`, which only replaced one of the specified substring.

-   ```js
    executeTemplateLiteral("test ${a}", [1], ["a"]);
    // => test 1

    executeTemplateLiteral("test {a}", [2], ["a"], true);
    // => test 2
    ```

    Executes a template literal in real time.

-   ```js
    checkForDuplicates({ a: [1, 1, 1, 2] });
    // => { a: [ 1, 2 ]}
    ```

    Removes duplicates in arrays that are in objects.

Using it:

```js
// Note: replaceAll is automatically added when requiring the package
const jsutils = require("natures-jsutils");
jsutils.<feature>(<args>);
```

If you want to use it in a browser just copy the code of whatever feature, but please keep the credits 🙂
