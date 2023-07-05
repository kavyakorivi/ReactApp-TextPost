const mongoose = require("mongoose");

// 2. create schema for entity
const postSchema = new mongoose.Schema({
  postcontent: { type: String, required: true},
  userid: { type: String, required: true},
  postlikes: {type: Number}
  
})

// 3. create model of schema
const Post = mongoose.model("Post", postSchema);


//CREATE a post
async function create( userid, postcontent) {

    const newPost = await Post.create({
        userid: userid,
        postid: userid,
        postcontent: postcontent
  });

  return newPost;
}

// READ a post
async function read(userid) {
  const post = await Post.find({"userid": userid});
  if(!post) throw Error('post not found');
  
  return post;
}

// UPDATE
async function updatePost(id, postcontent) {
  const post = await Post.updateOne({"_id": id}, {$set: { postcontent: postcontent}});
  return post;
}

//DELETE
async function deletePost(id) {
  const post = await Post.deleteOne({"_id": id});
  return post;
};

// utility functions
async function getPost(post) {
  return await Post.findOne({ "post": post});
}

// 5. export all functions we want to access in route files
module.exports = { 
  create, read, updatePost, deletePost, getPost
};