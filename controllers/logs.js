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

module.exports = {
  index: index,
  show:  show
};
