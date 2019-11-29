let b = require("./b");

function testBC() {
  console.log("A.js")
  console.log(b.add(1, 5));
}

exports.testBC = testBC;