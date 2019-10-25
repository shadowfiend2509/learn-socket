const Room = require('../models/room');

class RoomController {
  static findAllRoom (req,res,next) {
    Room.find().populate('UserId')
      .then(rooms => {
        res.status(200).json(rooms)
      })
      .catch(next)
  }
}

module.exports = RoomController;