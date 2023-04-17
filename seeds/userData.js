const {User} = require('../models');
const userData = 
[{
    "name": "lou",
    "email": "lousmith@gmail.com",
    "password": "tester123"
}]

const seedUser = () => User.builkCreate(userData);
module.exports = seedUser
