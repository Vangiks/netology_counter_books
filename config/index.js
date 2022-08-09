require('dotenv').config();

const config = {
  PORT: process.env.PORT || 3002,
  REDIS_HOST: process.env.REDIS_HOST || 'redis://host.docker.internal',
  REDIS_PORT: process.env.REDIS_PORT,
};

module.exports = config;
