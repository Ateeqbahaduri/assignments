// after you did get and post for all/some then do this

const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: { required: true, type: String},
    body: { type: String },
    image_url: { type: String }
})

// we are setting this model for collection called post and setting post schema 
const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;