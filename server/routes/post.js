const express = require("express");
const Post = require('../models/post');
const router = express.Router();

router
 .post('/createpost', async (req,res) => {
    try{
     const post = await Post.createPost(req.body.userid,req.body.postcontent);  
     res.send({post});
    } catch(error){
      res.status(401).send({message: error.message});
    }
 })
 .post('/readpost', async (req,res) => {
    try{
     const posts = await Post.readPost(req.body.id,req.body.postcontent);  
     res.send({posts});
    } catch(error){
      res.status(401).send({message: error.message});
    }
 })
 .put('/updatepost', async (req,res) => {
    try{
     const post = await Post.updatePost(req.body.id,req.body.postcontent);  
     res.send({post});
    } catch(error){
      res.status(401).send({message: error.message});
    }
 })
 .delete('/deletepost', async (req,res) => {
    try{
     await Post.deletePost(req.body.id);  
     res.send({ success: "Post Deleted" });
    } catch(error){
      res.status(401).send({message: error.message});
    }
 })

 module.exports = router;
 
