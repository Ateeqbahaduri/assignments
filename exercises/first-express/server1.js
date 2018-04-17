
const bodyParser = require("body-parser");
let cats = require("./cats.js");

const port = 8080;const express = require("express")
const app = express();
const uuid = require("uuid");

//middleware
app.use(bodyParser.json());


//routes
app.route("/cats")
    .get((req, res)=> {
        res.status(200).send(cats);
    })

    // post request:
//convert request body from json
// provide an id to the data (cat) being added
    .post((req, res)=> {
        //logic goes here
        //give data in request body an id
        // console.log(req.boddy)
        const newCat = req.body;
        newCat._id  = uuid();
        //save the data in request body to the "database"
        cats.push(newCat);
        //send back the data that was added
        res.status(201).send(newCat);
    })

    // Get one request
    // any request to the /cats/id endpoint we
    // will send  back the cat matching that id
    app.route("/cats/:id")
        .get((req, res)=>{
            // get params id
            const { id } = req.params;
            const foundCat = cats.filter(cat => cat._id === id)[0];
            // found my cat send back the cat
            res.status(200).send(foundCat);
        })
// DELETE one request
        .delete((req, res) => {
            const { id } = req.params;
// find and remove cat matching id:
            cats = cats.filter(cat => cat._id !== id);
            res.status(204).send();
        })
// PUT ONE
        .put((req, res) => {
            const {id} = req.params;
            let editedCat =req.body;
            // map through cats and replace the cat w/ matching id with req.body
            cats = cats.map(cat => cat._id === id ? editedCat= {...cat, ...editedCat} : cat);
            res.status(200).send(editedCat);
        })

    app.listen(port,  ()=> console.log("Server running on port " + port));

