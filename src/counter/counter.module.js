const CounterController = require('./counter.controller');
const CounterService = require('./counter.service');
const CounterRoutes = require('./counter.routes');

module.exports = {
  controllers: CounterController,
  providers: CounterService,
  routes: CounterRoutes,
};
