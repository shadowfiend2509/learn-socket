const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const RoomSchema = new Schema({
  UserId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  ],
  createdAt: Date
})

RoomSchema.pre('save', function(next) {
  if(this.UserId.length < 5) {
    this.createdAt = new Date()
    next()
  } else {
    throw {msg: 'limit'}
  }
})

const Room = Mongoose.model('rooms', RoomSchema);

Room.createCollection()
  .then(_ => {
    console.log(`Room Collection Created!`)
  })
  .catch(console.log)

module.exports = Room;