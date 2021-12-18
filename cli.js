#!/usr/bin/env node
import chalk from 'chalk';
// import fs from 'fs';
import fs from 'fs-extra';

var murderNode = function (dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(murderNode(file));
        }
        else if (dir) {
            fs.rmdir('/node_modules');
        } else {
            /* Is a file */
            results.push(file);

        }
    });
    // console.log(results);
    console.log(chalk.bold.green("You deleted those gosh darn node thingys. Congrats, you're a genuis."));
}

murderNode("express-course");

//---------------------------------------------
//---------------------------------------------
// Removes specified directory and it's contents
// Using - fs from 'fs'
// fs.rmdir("./node_modules",
//     { recursive: true, force: true }, (err) => {

//         if (err) {
//             return console.log(chalk.bgRed.bold("You messed up ya dummy, so read this ---> ", err));
//         }

//         console.log(chalk.green("You deleted those gosh darn node thingys. Congrats, you're a genuis."));
//     }
// );
//---------------------------------------------
//---------------------------------------------
// Attempt - Creating function to loop through all directories with the name 'node_modules' and delete
// let delDirectories = () => {

//     let directories = [];
//     let folder = './node_modules';

//     for (var i = 0; i < directories.length; i++) {
//         fs.remove(folder, err => {

//             if (err) {
//                 console.log(chalk.red("You messed up ya dummy, so read this ---> ", err));
//             } else {
//                 console.log(chalk.bold.green("You deleted those gosh darn node thingys. Congrats, you're a genuis."));
//             }

//         });
//     }

// };
// delDirectories();
//---------------------------------------------
//---------------------------------------------