const cors = require('cors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

require('dotenv').config();
require('./config/database');
app.use(logger('dev'));
app.use(express.json());

const technologiesRouter = require('./routes/api/technologies');
const commentsRouter = require('./routes/api/comments');
const usersRouter = require('./routes/api/users');

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route
app.use(require('./config/auth'))
app.use('/api/technologies', technologiesRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/users', usersRouter);

// Catch all route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`);
});