const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/config');
const routes = require('./server.routes');
require('./database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

app.use('/api', routes);

app.listen(config.port, () => console.log(`App running on port ${config.port}.`));