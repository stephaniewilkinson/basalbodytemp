var mongoose = require('mongoose'),
    User     = require('./user.js'),
    debug    = require('debug')('app:models');

var logSchema = new mongoose.Schema({
  tempTime: Date,
  temp:     Number,
  user:     { type: mongoose.Schema.Types.ObjectId, ref:'User' }
});

var Log = mongoose.model('Log', logSchema);

module.exports = Log;
