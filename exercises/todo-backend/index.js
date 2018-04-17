
const bodyParser = require("body-parser");
let todo = require("./todos.js");

const port = 8080;const express = require("express")
const app = express();
const uuid = require("uuid");

//middleware
app.use(bodyParser.json());


//routes
app.route("/todo")
    .get((req, res)=> {
        res.status(200).send(todo
    );
    })

    // post request:
//convert request body from json
// provide an id to the data (todo) being added
    .post((req, res)=> {
        //logic goes here
        //give data in request body an id
        // console.log(req.boddy)
        const newTodo = req.body;
        newTodo._id  = uuid();
        //save the data in request body to the "database"
        todo
    .push(newTodo);
        //send back the data that was added
        res.status(201).send(newTodo);
    })

    // Get one request
    // any request to the /todo
//id endpoint we
    // will send  back the todo matching that id
    app.route("/todo/:id")
        .get((req, res)=>{
            // get params id
            const { id } = req.params;
            const foundTodo = todo
        .filter(obj => obj._id === id)[0];
            // found my todo send back the todo
            res.status(200).send(foundTodo);
        })
// DELETE one request
        .delete((req, res) => {
            const { id } = req.params;
// find and remove todo matching id:
            todo = todo.filter(obj => obj._id !== id);
            res.status(204).send();
        })
// PUT ONE
        .put((req, res) => {
            const {id} = req.params;
            let editedTodo =req.body;
            // map through todo
         //and replace the todo w/ matching id with req.body
            todo
         = todo
        .map(obj => obj._id === id ? editedTodo= {...obj, ...editedTodo} : obj);
            res.status(200).send(editedTodo);
        })

    app.listen(port,  ()=> console.log("Server running on port " + port));

