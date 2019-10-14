const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const data = require('./routes/api/data');

//Express js
const  app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//Connect DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('MongoDB Connected....'));

//Use Routes
app.use('/api/data', data);

//variabe the port
const port = process.env.PORT || 5000;

//Listen Server
app.listen(port, () => console.log(`Server started on port ${port}`));
    