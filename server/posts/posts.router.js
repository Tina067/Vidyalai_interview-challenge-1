const express = require('express');
const { fetchPosts } = require('./posts.service');
const { fetchUserById } = require('../users/users.service');
const axios = require('axios').default;
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Fetched posts:', posts);

    const postsWithImagesAndUsers = await Promise.all(
      posts.map(async (post) => {
        const { data: photos } = await axios.get(`https://jsonplaceholder.typicode.com/albums/${post.id}/photos`);
  
        const user = await fetchUserById(post.id);
        return {
          ...post,
          images: photos.slice(0, 3).map(photo => ({ url: photo.url })), // Take first 3 photos for the post
          user, // Include user data in the post
        };
      })
    );

    res.json(postsWithImagesAndUsers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

module.exports=router;