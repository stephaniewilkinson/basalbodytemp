var mongoose = require('./database');

var Log = require('../models/log'),
    User = require('../models/user');

var users = [
  { // 0
    name: "Earl Url",
  },
  { // 1
    name: "Mary Funnelcake",
  },
  { // 2
    name: "Ayn Rand Paul Walker",
  },
  { // 3
    name: "Dude",
  }
];

// remove any log or users in the database
Log.remove({}, function(err) {
  if (err) console.log(err);

  User.remove({}, function(err) {
    if (err) console.log(err);

    // create users
    User.create(users, function(err, users) {

      var logs = [
        {
          tempTime: Date('1995-12-17T03:24:00'),
          temp: 98.74,
          user: users[0]._id,
        },
        {
          tempTime: Date('1995-12-17T03:24:00'),
          temp: 97.5,
          user: users[0]._id
        },
        {
          tempTime: Date('1995-12-17T03:24:00'),
          temp: 97.9,
          user: users[0]._id
        },
        {
          tempTime: Date('1995-12-17T03:24:00'),
          temp: 97.34,
          user: users[0]._id
        },
        {
          tempTime: Date('1995-12-17T03:24:00'),
          temp: 98.1,
          user: users[0]._id
        },
        {
          tempTime: Date('1995-12-17T03:24:00'),
          temp: 98.6,
          user: users[0]._id
        },
        {
          tempTime: Date('1995-12-17T03:24:00'),
          temp: 97.9,
          user: users[0]._id
        },
        {
          tempTime: Date('1995-12-17T03:24:00'),
          temp: 98.9,
          user: users[0]._id
        }
      ];

      // create default logs
      Log.create(logs, function(err, logs) {

        if (err) {
          console.log(err);
        } else{
          console.log(`Database seeded with ${users.length} users and ${logs.length} logs`);

          // disconnect db
          mongoose.connection.close();
        }
        process.exit();
      });
    });
  });
});
