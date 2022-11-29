const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const handleError = require('./middlewares/error.midlewares')
const {userRoutes, authRoutes, courseRoutes, videoRoutes, categoriesRoutes} = require("./routes");
const initModels = require("./models/init.models");

require('dotenv').config();

const app = express(); 

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());




db.authenticate()
.then(() => console.log('Autenticacion exitosa'))
.catch((error) => console.log(error));

db.sync({force: false})
.then(() => console.log('Base de datos sincronizada'))
.catch((error) => console.log(error));

initModels();

app.get('/', (req, res) => {
    console.log('Bienvenido al server')
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', courseRoutes);
app.use('/api/v1', videoRoutes);
app.use('/api/v1', categoriesRoutes);

app.use(handleError);

module.exports = app; 