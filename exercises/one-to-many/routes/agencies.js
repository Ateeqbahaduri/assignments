const express = require("express");
const agencyRouter = express.Router();

const AgencyModel = require("../models/agencies.js");

agencyRouter.route("/")

    .get((req, res) => {
        AgencyModel.find(req.query)
        .populate("agencyId")
        .exec((err, foundAgencies) => {
            if(err) return res.send(err);
            res.status(200).send(foundAgencies);
        });
    })

    .post((req, res) => {
        const newAgency = new AgencyModel(req.body);
        newAgency.save((err, saveAgency) => {
            if (err) return res.send(err);
            res.status(201).send(savedAgency);
        });
    });






module.exports = agencyRouter;