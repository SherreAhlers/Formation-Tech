var mongoose = require('mongoose');

mongoose.connect(
      'mongodb://localhost:27017/technologies',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

let db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});