'use strict';

const SETUPArticles = require('./api/helpers/setup');

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, async (err, swaggerExpress) => {
  if (err) { throw err; }

  await setupArticles.setupArticles();

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);
});
