var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var logSchema = new mongoose.Schema({
  tempTime : Date,
  temp: Number
});

var Log = mongoose.model('Log', logSchema);

module.exports = Log;
