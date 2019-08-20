const express = require('express');
const app = express();
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const admins = require('./routes/api/admins');
const students = require('./routes/api/students');

// mongoose connection
const mongoose = require('mongoose');
mongoose.connect(keys.mongodb_URI, {useNewUrlParser: true});
// test mongoose connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database Connected')
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// routes
app.use('/api/admins', admins);
app.use('/api/students', students);

// opening port
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
  });