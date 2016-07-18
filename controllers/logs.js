// Require resource's model(s).
var Log = require("../models/log");

var index = function(req, res, next){
  Log.find({}, function(err, logs) {
    if (err) {
      res.json({message: err});
    } else {
      res.render('logs/index', {logs: logs});
    }
  });
};

var chart = function(req, res, next){
  Log.find({}, function(err, logs) {
    if (err) {
      res.json({message: err});
    } else {
      res.render('logs/chart', {logs: logs});
    }
  });
};


var show = function(req, res, next){
  Log.findById(req.params.id, function(err, log) {
    if (err) {
      res.json({message: 'Could not find log because ' + err});
    } else if (!log) {
      res.json({message: 'No log with this id.'});
    } else {
      res.render('logs/show', {log: log});
    }
  });
};

var create = function(req, res) {
  var log   = new Log();

  log.user  = req.body.user;
  log.tempTime  = req.body.tempTime;
  log.temp  = req.body.temp;

  log.save(function(err, savedLog) {
    if (err) {
      res.send(err)
    }

    // log a message
    console.log("Creaed a new log!")
    // return the log
    res.json(savedLog);
  });
};



module.exports = {
  index:  index,
  show:   show,
  create: create,
  chart: chart
};
