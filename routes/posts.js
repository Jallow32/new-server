const express = require('express');
const router = express.Router();
const controller = require('../controller/postControllers');

router.get('/', controller.getAllPosts);
router.get('/:postId', controller.getPostById);
router.post('/', controller.createPost);
router.delete('/:postId', controller.deletePost);
router.patch('/:postId', controller.updatePost);

module.exports = router;