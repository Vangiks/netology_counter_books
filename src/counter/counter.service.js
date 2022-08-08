const config = require('../../config');

const { createClient } = require('redis');

const clientRedis = createClient({
  url: `${config.REDIS_URL}${
    config?.REDIS_PORT ? `:${config?.REDIS_PORT}` : ''
  }`,
});

clientRedis.on('error', (error) => console.log('Redis Client Error', error));

(async () =>
  await clientRedis
    .connect()
    .then(() => console.log('Redis Client connected')))();

class CounterService {
  constructor(client) {
    this._client = client;
  }

  async getCounter(id) {
    return this._client.get(id);
  }

  async increaseCounter(id) {
    return this._client.incr(id);
  }
}

module.exports = new CounterService(clientRedis);
