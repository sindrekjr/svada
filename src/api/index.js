const svada = require('../svada');
const dotenv = require('dotenv');
const express = require('express');
const translate = require('translate');

dotenv.config();
const { PORT = 3000, TRANS_ENGINE, TRANS_KEY } = process.env;

translate.engine = TRANS_ENGINE;
translate.key = TRANS_KEY;
translate.from = 'no';

const app = express();
const get = request => request.query ? svada(request.query.type) : svada();
app.get('/', (req, res) => res.send(get(req)));
app.get('/:language', async (req, res) => {
  const result = get(req);
  try {
    res.send(await translate(get(req), { to: req.params.language }));
  } catch(error) {
    console.log(error);
    res.send(result);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
