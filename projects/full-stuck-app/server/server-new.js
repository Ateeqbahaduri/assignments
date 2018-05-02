//step-one, fisrt 3 are must
const express = require('express');
const mongoose = require('mongoose');
const bp = require('body-parser');
const PostModel = require("./bears-model")
// this comes after we define router in line 22

// setting up the app
const app = express();
const PORT = 8080;

//step-two: middleware
app.use(bp.json());

//step3 - routes, after this , the post and get req for getting some and all 
app.route("/bears")
    .get((req, res) => {
        PostModel.find(req.query, (err, foundposts) => {
            
            // ? means is ternanry if statement besfore colone is true and after conlone is false.
            err ? res.status(400).send(err) : res.status(200).send(foundposts)
        })
    })
    .post((req, res) => {
        console.log(req.body)
        const newPost = new PostModel(req.body)
        newPost.save((err, addedPost) => {
            err ? res.status(200).send(err) : res.status(200).send(addedPost)
        })
    })

    // these routes are for individual reqs
    app.route('/bears/:id')

    .get((req, res) => {
        PostModel.findOne({ _id: req.params.id })
        .exec((err, foundPost) => {
            if (err) {
                res.status(400).send(err)
            } else if (foundPost) {
                res.status(200).send(foundPost)
            } else {
                res.status(404).send("Post not found")
            }
        })
    })
    .delete((req, res) => {
        PostModel.findOneAndRemove({ _id: req.params.id })
        .exec((err, delPost) => {
            if (err) {
                res.status(400).send(err)
            } else if (delPost) {
                res.status(204).send()
            } else {
                res.status(404).send("404 --- Post Not found")
            }
        })
    })
    .put((req, res) => {
        PostModel.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .exec((err, updatePost) => {
            if (err) {
                res.status(400).send(err)
            } else if (updatePost) {
                res.status(200).send(updatePost)
            } else {
                res.status(404).send("Post not found")
            }
        })
    })
mongoose.connect('mongodb://localhost:27017/bears')
app.listen(PORT, () => console.log(`Ateeq server running on ${PORT}`))

