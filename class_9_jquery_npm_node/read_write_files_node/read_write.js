//const fs = require("fs");
import fs from "fs";

fs.writeFile("message.txt", "Hello222", (err) => {
    if(err) throw err;
    console.log("The file has been saved!");
});

fs.readFile("message.txt",'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
