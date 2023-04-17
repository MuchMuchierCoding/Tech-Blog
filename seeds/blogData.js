const {Blog} = require('../models');
const blogData = 
[{
    "title": "New Tech",
    "content": "new technology research...",
    "user_id": 1
}]

const seedData = () => Blog.bulkCreate(blogData);
module.exports = seedBlog