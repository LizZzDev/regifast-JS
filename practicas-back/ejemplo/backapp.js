const express = require('express');
const cors = require('cors');

const logger = require('./utils/logger');
const router = require('./api/router');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

const { APP_PORT = 4000 } = process.env;

app.use(cors());

app.use(express.json({ limit: '500kb' }));
app.use(express.urlencoded({ extended: true }));


app.get('/', (_req, res) =>
  res.json({ appName: app.locals.name, version: app.locals.package_version }),
);

app.use('/', router);
app.use(errorHandler);

app.listen(APP_PORT, () => {
    logger.info(`server is listening port: ${APP_PORT}`);
  });
