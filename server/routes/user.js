const Route = require('express').Router();
const UserCont = require('../controllers/userController.js');

Route.get('/login', UserCont.login);
Route.get('/register', UserCont.register);

module.exports = Route;