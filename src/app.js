const express = require('express');
const mongoose = require('mongoose');

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


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

const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "Diário de Bordo API",
        description: "API desenvolvida para o aplicativo Diário de bordo.",
        contact: {
          name: "Thalyson Dutra"
        },
      }
    },
    apis: ["./routes/*.js"]
  };
  
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs, { explorer: true })
  );


const taskRoutes = require('./routes/task-routes');
app.use('/tasks', taskRoutes);

const userRoutes = require('./routes/user-routes');
app.use('/users', userRoutes);

module.exports = app;