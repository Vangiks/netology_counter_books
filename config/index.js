require('dotenv').config();

const config = {
  PORT: process.env.PORT || 3002,
  REDIS_URL: process.env.REDIS_URL || 'redis://host.docker.internal',
  REDIS_PORT: process.env.REDIS_PORT || '6379',
};

module.exports = config;
