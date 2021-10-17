// let a = 10;
// let b = 30;
// let sum = a+b;

// console.log(sum);

// let http = require('http');

// http.createServer(function(req,res)
// {
//   res.write("welcome back alien !!");
//   res.end()

// }).listen(9000);

let fs = require('fs');


fs.writeFile("myWritingFile.js", '("IM THE NEW WRITTEN FILE")', function(err){
    console.log("data is sucessfully written");
})
fs.readFile('calculatipn.js', 'utf8', function(err){
    console.log('file is readed sucessfully');
})
fs.appendFile("myWritingFile", "I'M THE APPENDED DATA IN THIS FILE", function(err) {
    console.log("data is appended successfully");
});