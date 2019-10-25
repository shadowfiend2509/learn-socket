const Route = require('express').Router();
const RoomCont = require('../controllers/roomController.js');

Route.get("/", RoomCont.getAllRoom);
// Route.get('/:id', RoomCont.getRoomId)

module.exports = Route;