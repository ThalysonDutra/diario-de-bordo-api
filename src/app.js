const express = require('express');
const mongoose = require('mongoose');

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true 
});

const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});


const Users = require('./models/userModel');
const Tasks = require('./models/taskModel');

const taskRoutes = require('./routes/task-routes');
app.use('/tasks', taskRoutes);

const userRoutes = require('./routes/user-routes');
app.use('/users', userRoutes);

module.exports = app;