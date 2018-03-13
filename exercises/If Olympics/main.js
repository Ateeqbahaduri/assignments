/* var num = 5;
if (num>3){
    console.log ("Correct");
}
var pet = "cat";

if (pet.length === 3 ) {

console.log ("Cat has 3 letters");
}
 var animal = "cat";
 var animal = "dog";
 if (animal + animal === true) {
    console.log("The same.") 

 } else (animal + animal1 === false) {

     console.log ("not the same");
 }

var person = {
    name: "Bahaduri", 
    age: 24,
    name: "Barber",
    age: 65,
}
if (person.age >= 18){
    if (person.name[0] == "B"){
    console.log(person.name + " is allowed to go to the movie");
    }
} else {
    console.log(person.name + " is not allowed to go to the movie");
}
if ("1" === 1) {
    console.log ("loooe") 
} else if (1 == "1"){
    console.log("not equal at all");
}
*/
/*
for (var i=0; i<10; i++) {
    
    console.log(i);   
}
for (var i=9; i>=0; i--) {
    console.log(i);

}
var fruit = ["banana", "orange", "apple", "kiwi"]
for (var i=0; i<fruit.length; i++) {
    console.log (fruit[i]);
}
*/

// var nums = [];

// for (var i = 0; i < 10; i++) {

//     nums.push(i);
// }

// console.log(nums);

/*

for (i=1; i<100; i++){
    if (i+=1){
        console.log(i);
    }
    
}


var fruits =[ "banana", "orange", "apple", "kiwi", "pear", "peach"]
for (i=0; i<fruits.length; i++){
    console.log(fruits+=1);
}
*/
// var peopleArray = [{
//         name: "Harrison Ford",
//         occupation: "Actor"
//     },
//     {
//         name: "Justin Bieber",
//         occupation: "Singer"
//     },
//     {
//         name: "Vladmir Putin",
//         occupation: "Politician"
//     } 
//     {
//         name: "Oprah" ,
//         occupation: "Entertainer"
//     }
// ]
function totalCount(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        count = count + arr[i];
    }
    return count;
    
}
console.log(totalCount([1, 2, 3, 4, 5,]));