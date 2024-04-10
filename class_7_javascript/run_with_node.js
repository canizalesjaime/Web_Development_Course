//how to load external files I guess

// load dependencies in other scripts
///////////////////////////////////////////////////////////////////////////////
require("./code/load")("code/journal.js", "code/04_data.js");


// This makes sure the data is exported in node.js —
//`require('./path/to/journal.js')` will get you the array.
// Use for data in external file
///////////////////////////////////////////////////////////////////////////////
if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = JOURNAL;
if (typeof global != "undefined" && !global.JOURNAL)
  global.JOURNAL = JOURNAL;


  // load.js
  ///////////////////////////////////////////////////////////////////////////////
  module.exports = function(...args) {
    for (let arg of args)
      (1,eval)(require("fs").readFileSync(__dirname + "/../" + arg, "utf8"))
  }

