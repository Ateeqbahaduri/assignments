//  ```/ Don't Repeat Yourself

var titleCaseAllArrayItems = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var currMovie = arr[i];
        var titleCased = titleCaseIt(currMovie);
        console.log(titleCased);
    }
}

var titleCaseIt = function(str) {
    return str.split(" ").map(function(item) {
        return item[0].toUpperCase() + item.slice(1);
    }).join(" ");
}

var movies = ["a river runs through it", "star wars", "step brothers", "the matrix"]
var books = ["a river runs through it", "star wars", "where the red fern grows", "moby dick"];

titleCaseAllArrayItems(movies);
titleCaseAllArrayItems(books);
```

V School Computer [5:31 PM]
```// "string literal"
// 394857239582738495
// true
// false
// []
// {}
// function anon(){

// }

//  .length

//  .indexOf

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// console.log(alphabet.charAt(4))
console.log("+".charCodeAt(0));

// console.log(alphabet.indexOf("S"));

var sandwichShop = "bevenStevens";

// provide the index of the string "even"
// console.log(sandwichShop.indexOf("even"));
// console.log(sandwichShop.lastIndexOf("even"));

var animalClothes = "elephantpants";
// console.log(animalClothes.slice(0, 8));
// console.log(animalClothes.slice(3, 15));

let phant = animalClothes.slice(3, 8);
let ant = animalClothes.slice(5, 8);

// console.log(phant.concat(ant));

// .split
var ben = "Ben Turner";
let splitBen = ben.split(" ");
// console.log("first name: " + splitBen[0]);
// console.log("last name: " + splitBen[1]);

```

Message Input

Message students-js-feb