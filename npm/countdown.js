#!/usr/bin/env node

const parseArgs = require("minimist");
const { stdout:log} = require("single-line-log");
const Timer = require("tiny-timer");

//
// Collect the time from argv
//
const{ time } = parseArgs(process.argv);

if(!time) {
    throw new Error(" Time is required");
}

if(!parseInt(time)) {
    throw new Error("Time must be a number");
}

console.log(time);



//
// Print starts in-line
//

const count = parseInt(time);
let message = "";

for(let i=0; i<count; i++) {
    message += "*";
}

// log(message);

// setTimeout(()=>{
//     log("overwrites line\n");
// }, 2000);

//
//Run a timer and remove starts
//

const timer = new Timer({ interval: 1000})

timer.on("tick", () => {
    log(message);
    message = message.slice(1);
});

timer.start(count * 1000);
