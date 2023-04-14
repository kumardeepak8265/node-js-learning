const fs = require("fs");
//fs ya node ka built module hai
const path = require("path");
//path hama path da deta hai ex= jasa hama kisi folder ka under jana hai tab ishka use karanga
const dirPath = path.join(__dirname, "files");
const filePath = `${dirPath}/apple.txt`;

//files updated function
// fs.appendFile(filePath, "and file name is apple.txt", (err) => {
//   if (!err) {
//     console.log("not error and file update");
//   }
// });

//files rename
// fs.rename(filePath, `${dirPath}/orange.txt`, (err) => {
//   if (!err) {
//     console.log("file update without error");
//   }
// });

//files delete
fs.unlinkSync(`${dirPath}/orange.txt`);

//iq = buffer kya hota hai
// node js ko file create karna ka liya space chiya hota hai isi ko buffer kahta hai
