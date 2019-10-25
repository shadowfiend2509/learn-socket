const Route = require('express').Router();
const Room = require('./room');
const User = require('./user');

Route.use('/', User);
Route.use('/rooms', Room);

module.exports = Route;