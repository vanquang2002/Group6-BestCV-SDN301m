import { Post } from "../Model/Post.js";
import mongoose from "mongoose";

/**
 * @name: insertPost
 * @param {*} req 
 * @param {*} res 
 * @author LuanDT7
 * @date 2024-01-19
 */
async function insertPost(req, res) {
    try {
        const newPost = await Post(
            {
                _id: mongoose.Schema.ObjectId,
                HRId: req.body.HRId,
                companyId: req.body.companyId,
                title: req.body.title,
                jobDescription: req.body.jobDescription,
                salary: req.body.salary,
                candidateReq: req.body.candidateReq,
                location: req.body.location,
                deadline: req.body.deadline,
            }
        );
        res.status(201).json({
            message: 'Insert Post Successfully!!!',
            data: newPost,
        });


    } catch (error) {
        res.status(500).send({
            message: 'Insert Post fail!!!',
            err: error.message
        });
    }
}



/**
 * @name getPost()
 * @param {*} req 
 * @param {*} res 
 * @author LuanDT7
 * @date 2024-01-19
 */
async function getPost(req, res) {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        if (!post) {
            res.status(404).json({
                message: "Post is not found!"
            });
        } else {
            res.status(200).json({
                message: "Post '" + post.title + "' is available!",
                data: post
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Something gets wrong! Please try again!",
            error: error
        });
    }
}

/**
 * @name updatePost
 * @param {*} req 
 * @param {*} res 
 * @name LuanDT7
 * @date 2024-01-19
 */
async function updatePost(req, res) {
    const postId = req.params.id;
    try {
        const post = await User.findById(postId);
        if (!post) {
            res.status(404).json({
                message: "Can not find post with id '" + postId + "'",
            });
        } else {
            const newPost = await Post({
                title: req.body.title,
                jobDescription: req.body.jobDescription,
                salary: req.body.salary,
                candidateReq: req.body.candidateReq,
                location: req.body.location,
                deadline: req.body.deadline,
            })
            await newPost.save();
            res.status(201).status({
                message: "Update Post Successfully!",
                data: newPost
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "An error occurs. Please check again!"
        })
    }
}

export { getPost, insertPost, updatePost }