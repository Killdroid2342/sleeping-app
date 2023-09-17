function routes(app, { urlencodedParser }) {
  app.use('/user', urlencodedParser, require('./user'));
  app.use('/auth', urlencodedParser, require('./auth'));
  app.use('/sleepData', urlencodedParser, require('./sleepData'));
}
module.exports = routes;
