import express from "express";
import uuid from "uuid";
import bodyParser from "body-parser";

const app = express();
let bounty = require("./bounty.js");
const port = 8080;

app.use(bodyparser.json());

app.route("/bounties")
    .get((req, res) => {
        res.status(200).send(bounty);
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid() + "Dirt ghirt and jirt";
        bouty.push(newBounty);
        res.status(201).send(newBounty);
    });
app.route("/bounty/:id")
    .get((req, res) =>{
        const { id }
    })