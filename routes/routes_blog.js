const express = require('express');
const router = express.Router();

const Blogmodel = require('../model/model_blog.js');

router.get('/', Blogmodel.getAllBlog);
router.get('/:id', Blogmodel.getSingleBlog);
router.post('', Blogmodel.PostBolg);
router.patch('/:id', Blogmodel.UpdateBlog);
router.delete('/:id', Blogmodel.DeleteBolg);


module.exports = router