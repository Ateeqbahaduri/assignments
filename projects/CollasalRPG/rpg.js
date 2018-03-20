var string = "in a string";
sessionStorage.setItem("str", str);
var num = 10;
sessionStorage.setItem("num", num);
console.log(sessionStorage.getItem("num"));
var bool = true;
sessionStorage.setItem("bool", bool);
var obj = {
    kay: "value",
    method: function(){
        console.log("Im a method");
    }
}
localStorage.setItem("obj", JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("obl")));
var arr = [4, true, "blue"];
localStorage.setItem("arr", arr);