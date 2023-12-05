// app.js
var createError = require('http-errors');
var express = require('express');
// ... other imports ...

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var videosRouter = require('./routes/videosRouter');

var app = express();

// view engine setup and middleware...
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/videos', videosRouter); // Include this only if videos.js exists in routes

// catch 404 and forward to error handler...
// error handler...

module.exports = app;

// app.js
// ... other imports and setup ...

var videosRouter = require('./routes/videos');

// ... other app.use middleware ...

app.use('/videos', videosRouter);

// ... rest of your app.js code ...
