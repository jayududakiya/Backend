const express  = require('express');
const userRoute = express.Router();
const { createUser } = require('../controller/user.controller')


userRoute.post('/createUser',createUser);


module.exports = userRoute;
