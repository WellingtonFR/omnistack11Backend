const express = require('express');
const route = express.Router();
const connection = require('./database/connection');
const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentsController');
const profileController = require('./controllers/ProfileController');
const sessionsController = require('./controllers/SessionController');

route.post('/sessions', sessionsController.create);

route.get('/ongs', ongController.index);
route.post('/ongs', ongController.create);

route.get('/incidents', incidentController.index);
route.post('/incidents', incidentController.create);
route.post('/incidents/:id', incidentController.delete);
route.post('/incidents/:id', incidentController.delete);

route.get('/profile', profileController.index);



module.exports = route;
