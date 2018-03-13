// function isCaps(str){
// var testString = ['hELLO wORLD'];
// return testString === testString.toUpperCase();
// for(var i =0; i< testString.length; i++){
//     if(newString.test(testString[i])){
//          newString += testString[i].toLowerCase()
//     } else { newString+= testString[i].toUpperCase()
//         return testString === testString.toUpperCase();
//     }  
    
// }
// }
// console.log(testString);
// loop through each letter
// determine lower and uppercase
// return new string
function isCaps(str){
    var newString = "";
    for (var i=0; i<str.lenght; i++){
        if (str[i] === str[i].toUpperCase()){
            newstring += str[i].toLowerCase();
        } else {
            newString += str[i].toUpperCase();
        }
    }
    return newString;
}
var arr=("fdfdfdAAA")
console.log(isCaps(arr));
