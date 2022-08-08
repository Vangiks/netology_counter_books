const config = require('./config');
const modules = require('./src/app.module');

const express = require('express'),
  app = express();

const port = config.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', modules);

app.listen(port, () =>
  console.log(`Server listens http://127.0.0.1:${port}`)
);
