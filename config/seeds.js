var mongoose = require('./database');

var User = require('../models/user');
var Log = require('../models/log');

var users = [
  { // 0
    handle: "DunkLord",
    name:   "Bob Neverdunk"
  },
  { // 1
    handle: "MoneyMarge",
    name:   "Margaret Kalanchoe"
  }
];

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
      // mongoose.connection.close(function(err) {
      //   if (err) console.log(err);
      //   process.exit(0);
      // });
    }
  });
});

var logs = [
  {
    tempTime: Date('1995-12-17T03:24:00'),
    temp: 98.74
  },
  {
    tempTime: Date('1995-12-17T03:24:00'),
    temp: 97.5
  },
  {
    tempTime: Date('1995-12-17T03:24:00'),
    temp: 97.9
  },
  {
    tempTime: Date('1995-12-17T03:24:00'),
    temp: 97.34
  },
  {
    tempTime: Date('1995-12-17T03:24:00'),
    temp: 98.1
  },
  {
    tempTime: Date('1995-12-17T03:24:00'),
    temp: 98.6
  },
  {
    tempTime: Date('1995-12-17T03:24:00'),
    temp: 97.9
  },
  {
  tempTime: Date('1995-12-17T03:24:00'),
  temp: 98.9
  }
];

Log.remove({}, function(err) {
  if (err) console.log(err);
  Log.create(logs, function(err, logs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + logs.length  + " logs.");
      mongoose.connection.close(function(err) {
        if (err) console.log(err);
        process.exit(0);
      });
    }
  });
});
