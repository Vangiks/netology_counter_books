const CounterService = require('./counter.service');

class CounterController {
  async getCounter(request, response) {
    const bookId = request.params?.bookId || '';
    if (bookId) {
      const counter = await CounterService.getCounter(bookId);
      if (counter)
        return response.status(200).send({
          response: counter,
          errors: [],
          status: true,
        });
      else
        return response.status(500).send({
          errors: ['Counter not get'],
          response: null,
          status: false,
        });
    } else
      return response
        .status(404)
        .send({ errors: ['Param not found'], response: null, status: false });
  }

  async increaseCounter(request, response) {
    const bookId = request.params?.bookId || '';
    if (bookId) {
      const counter = await CounterService.increaseCounter(bookId);
      if (counter)
        return response.status(200).send({
          response: counter,
          errors: [],
          status: true,
        });
      else
        return response.status(500).send({
          errors: ['Counter not increase'],
          response: null,
          status: false,
        });
    } else
      return response
        .status(404)
        .send({ errors: ['Param not found'], response: null, status: false });
  }
}

module.exports = new CounterController();
