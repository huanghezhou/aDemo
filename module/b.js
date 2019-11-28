let tst = require("./c.js");
function add(x,y){
  console.log("执行c")
  tst.test();
  return x+y
}

exports.add = add