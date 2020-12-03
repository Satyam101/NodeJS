
// // var operating_system= require("os");
// // console.log(operating_system.release());

// //  var fs= require("fs");

// // fs.readFile("E:\\GUVI Tasks\\Zen\\nodejs-pract\\ref.txt","utf8",(err,data)=>{

// //     if(err) throw err;
// //     console.log(data);
// // })


// // let information="sample file to create in a same file here ";

// // fs.writeFile("example.txt",information,(err,data)=>{

// // if(err) throw er
// // console.log("content is written in a file");

// // })

// console.log(process);


const { add, sub } = require("./my-custom-package/add");

let res1 = add(4, 32);
let res2 = sub(20,300);

console.log(res1);
console.log(res2);
