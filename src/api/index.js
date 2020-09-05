const svada = require('../svada');
const express = require('express');

const { PORT = 3000 } = process.env;
const app = express();

app.get('/', (req, res) => res.send(svada()));
app.get('/:type', (req, res) => res.send(svada(req.params.type)));
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
