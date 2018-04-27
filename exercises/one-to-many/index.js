const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const app = express();
let cats = require("./cats.js");

const agencyRouter = require
("./routes/agencies.js");
const port = 8080;

//middleware
app.use(bodyParser.json());
app.use(logger);

// routes
app.route("/cats", catRouter);
app.use("/agencies", agencyRouter);

mongoose.connect
 ("mongodb://localhost:27017/animals", (err) => {
     if (err) console.error
     (err):
     console.log("Connected to MongoDB");
 })
    .get((req, res) => {
        res.status(200).send(cats);
    })
    .post((req, res) => {
        //give data in request body an id
        const newCat = req.body;
        newCat._id = uuid() + "DERP";
        // save the data in request body to the 'database'
        cats.push(newCat);
        //send back the data that was added
        res.status(201).send(newCat);
    });

// GET one request
app.route("/cats/:id")
    .get((req, res) => {
        // get param id:
        const { id } = req.params;
        //find cat matching id:
        const foundCat = cats.filter(cat => cat._id === id)[0];
        // send back the cat
        res.status(200).send(foundCat);
    })
    // DELETE one request
    .delete((req, res) => {
        const { id } = req.params;
        // find and remove cat matching id:
        cats = cats.filter(cat => cat._id !== id);
        //send back the message the cat was removed
        res.status(204).send();
    })
    //PUT one
    .put((req, res) => {
        //find the param id
        const { id } = req.params;
        let editedCat = req.body;
        //map through cats and replace the cat w/ matching id with req.body
        cats = cats.map(cat => cat._id === id ? editedCat = { ...cat, ...editedCat } : cat);
        res.status(200).send(editedCat);
    })

app.listen(port, () => console.log("Server running on port " + port));
