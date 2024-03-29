import express from 'express';
import { createPost, deletePost, readPost, readPostByAdmin, readPosts, readPostsBySearch, readPostsByTag, readPostsByUser, updatePost } from '../controller/post.controller.js';
import { verifyAuth } from '../middlewares/verifyAuth.js';

const router = express.Router();

//public routes
router.get('/read', readPosts);
router.get('/getpost/:url', readPost);
router.get('/getpostbytag/:tag', readPostsByTag);
router.get('/search/:search', readPostsBySearch);

//private routes
router.post('/create', verifyAuth, createPost);
router.put('/update/:url',verifyAuth, updatePost);
router.delete('/delete/:url',verifyAuth, deletePost);
router.get('/readbyuser', verifyAuth, readPostsByUser);
router.get('/readbyadmin/:url', verifyAuth, readPostByAdmin);


export { router as postRoutes }