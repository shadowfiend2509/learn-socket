const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserController {
  static login (req,res,next) {
    let tempUser
    const {email, password} = req.body;
    if(email ==undefined, password ==undefined) throw {msg: 'zero'}
    else {
      User.findOne({ email })
        .then(user => {
          tempUser = user;
          if(user && bcryptjs.compareSync(password, user.password)) {
            return User.findByIdAndUpdate({_id: user._id},{status: true})
          } else {
            throw {msg: 'user/pass'}
          }
        })
        .then(_ => {
          const payload = {
            id: tempUser._id,
            username: tempUser.username,
            email: tempUser.email
          }
          const serverToken = jwt.sign(payload, 'learnSocketIo')
          res.status(200).json({token: serverToken, msg: 'Online'})
        })
        .catch(next)
    }
  }
  static register (req,res,next) {
    const {email, password} = req.body;
    if(email == undefined || password == undefined) throw {msg: 'zero'}
    else {
      User.create({email, password})
        .then(user => {
          console.log(user)
          res.status(201).json({msg: 'Success Register!'})
        })
        .catch(next)
    }
  }
}

module.exports = UserController;