const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    try {
        res.json(await Post.find());
    } catch (error) {
        res.json({message: error});
    }
}

exports.getPostById = async (req, res) => {
    try {
        res.json(await Post.findById(req.params.postId));
    } catch (error) {
        res.json({message: error});
    }
}

exports.createPost = async (req, res) => { 
    try {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            tags: req.body.tags,
        })

        res.json(await post.save());
    } catch (error) {
        res.json({message: error});
    }
}

exports.deletePost = async (req, res) => {
    try {
        res.json(await Post.deleteOne({'_id': req.params.postId}));
    } catch (error) {
        res.json({message: error});
    }
}

exports.updatePost = async (req, res) => {
    try {
        res.json(await Post.updateOne(
            {'_id': req.params.postId},
            {
                $set: {
                    title: req.body.title,
                    content: req.body.content,
                    author: req.body.author,
                    tags: req.body.tags,
                }
            }
        ));
    } catch (error) {
        res.json({message: error});
    }
}