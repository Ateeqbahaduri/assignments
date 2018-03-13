// var readlineSync = require("readline-sync");
// var myName = readlineSync.question("What is your name?");
// console.log("Hi, " + myName + "i");
// var isAdmin = readlineSync.keyInYN("Are you the Qudusminitor?");
// if (isAdmin) {
//     readlineSync.question("what is the pass?")
// } else {
//     console.log("Welcome to this khapri manila?");
//     var options = ["menu", "tools", "help"];
//     var index = readlineSync.keyInSelect(options, "what the fakh my frain?");
//     console.log("you are now in the" + options[index] + "selection");
// }
// var readlineSync = require('readline-sync'),
//   MAX = 60, MIN = 0, value = 30, key;
// console.log('\n\n' + (new Array(20)).join(' ') +
//   '[Z] <- -> [X]  FIX: [SPACE]\n');
// while (true) {
//   console.log('\x1B[1A\x1B[K|' +
//     (new Array(value + 1)).join('-') + 'O' +
//     (new Array(MAX - value + 1)).join('-') + '| ' + value);
//   key = readlineSync.keyIn('',
//     {hideEchoBack: true, mask: '', limit: 'zx '});
//   if (key === 'z') { if (value > MIN) { value--; } }
//   else if (key === 'x') { if (value < MAX) { value++; } }
//   else { break; }
// }
// console.log('\nA value the user requested: ' + value);
var rs = require("readline-sync");

// prompts
    // get one number
    // get another number
    // choose operation
// chooser function
    // selects which arithmetic function to perform , and calls it, using numbers as argumrnts.
// arithmetic functions
function add (x, y){
    return x + y

}
