const express = require("express");
const Post = require('../models/post');
const router = express.Router();

router
 .post('/create', async (req,res) => {
    try{
     const post = await Post.create(req.body.userid,req.body.postcontent);  
     res.send({post});
    } catch(error){
      res.status(401).send({message: error.message});
    }
 })
 .post('/view', async (req,res) => {
    try{
     const posts = await Post.read(req.body.userid);  
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
 
