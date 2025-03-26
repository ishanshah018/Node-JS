const pm = require("path");

// Get directory name
path = pm.dirname("/Users/name/JS-Javascript/prac1.js");
console.log(path);

// Get base filename
path = pm.basename("/Users/name/JS-Javascript/prac1.js");
console.log(path);

// Get file extension
let ext = pm.extname("/Users/name/JS-Javascript/prac1.js");
console.log(ext);

// Parse path
path = pm.parse("/Users/name/JS-Javascript/prac1.js");
console.log(path);