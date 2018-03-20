
// var axios = require("axios");
// axios.get("https://api.vschool.io/ateeq/todo").then(function (response) {
//     console.log(response.data);
// });
var todoUrl = "https://api.vschool.io/ateeq/todo";
var todolist = document.getElementById("todo-list");
axios.get(todoUrl).then(function(response){
    var todos = response.data;
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];
        var li = document.createElement("li");
 
        // create title
        var h3 = document.createElement("h3");
        h3.innerHTML = todo.title;
        li.appendChild(h3);
 
        // create description
        var description = document.createElement("p");
        description.innerHTML = todo.description;
        li.appendChild(description);
 
        //create price
        var price = document.createElement("p");
        price.innerHTML = "$" + todo.price;
        li.appendChild(price);
 
        //create completed
        var completed = document.createElement("p");
        completed.innerHTML = todo.completed;
        li.appendChild(completed);
 
        todoList.appendChild(li);
    }
 });
 
 
 // posting
 var form = document.getElementById("form");
 var inputData = {};
 
 form.addEventListener("submit", function (e) {
    e.preventDefault();
    // set the values of my inputs onto inputdata obj
    inputData.title = e.target.title.value;
    inputData.description = e.target.description.value;
    inputData.price = e.target.price.valueAsNumber;
    inputData.imgUrl = e.target.imgUrl.value;
    axios.post(todoUrl, inputData).then(function (response) {
        console.log(response.data);
    });
 });
