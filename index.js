
const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');

const cliente   = require('./routes/Cliente');
const libro     = require('./routes/Libro');
const venta     = require('./routes/Venta');

const { PORT }  = require('./config')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/cliente/', cliente);
app.use('/api/libro/', libro);
app.use('/api/venta/', venta);

app.listen(PORT, () => console.log('Runnign in port: '+ PORT))

require('./db')
