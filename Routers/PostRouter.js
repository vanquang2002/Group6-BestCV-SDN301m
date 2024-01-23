import express from 'express'
import { getPost, insertPost, updatePost } from '../Controller/PostController.js';

const PostRouter = express.Router();

PostRouter.get('/:id', (req, res) => {
    getPost(req, res);
});

PostRouter.post('/', (req, res) => {
    insertPost(req, res);
});

PostRouter.put('/update/:id', (req, res) => {
    updatePost(req, res);
});

export {PostRouter}