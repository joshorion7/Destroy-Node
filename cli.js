#!/usr/bin/env node
import chalk from 'chalk';
import fs from 'fs';
// const fs = require('fs');
// const path = require('path');

fs.rmdir("./node_modules",
    { recursive: true, force: true }, (err) => {

        if (err) {
            return console.log(chalk.bgRed.bold("You messed up ya dummy", err));
        }

        console.log(chalk.green(chalk.bold.bgGreen("You deleted those gosh darn node thingys. Congrats, you're a genuis.")));
    }
);