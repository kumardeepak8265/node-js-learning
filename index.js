const fs = require("fs");
//fs ya node ka built module hai
const path = require("path");
//path hama path da deta hai ex= jasa hama kisi folder ka under jana hai tab ishka use karanga
const dirPath = path.join(__dirname, "files");
// for (let i = 1; i <= 10; i++) {
//   //   fs.writeFileSync(dirPath + "/" + i + ".txt", "hello"); //string
//   fs.writeFileSync(`${dirPath} "/" ${i} .txt`, "hello"); //without string

//   //file create karna ka liya
// }

//get files name and print
fs.readdir(dirPath, (err, files) => {
  // console.log("files",files)//files ki array milagi
  files.forEach((item) => {
    console.log("item", item);
  });
});
