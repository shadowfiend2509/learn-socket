module.exports = (err,req,res,next) => {
  console.log(err)
  if(err.msg == 'user/pass') {
    res.status(403).json({msg: 'username/password wrong!'})
  }else if(err.msg == 'zero') {
    res.status(403).json({msg: 'invalid input'})
  }else if(err.msg == 'ValidationError') {
    res.status(403).json({msg: 'Validation Error'})
  }
  else {
    res.status(500).json({msg: 'Internal Server Error'})
  }
}