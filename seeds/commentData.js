const {Comment} = require('../models');
const commentData = 
[{
    "comment_text": "great research",
    "user_id": 1,
    "blog_id": 1
}]

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment