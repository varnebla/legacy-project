const Koa = require('koa');
const app = new Koa();
const router = require('./router.js');
const bodyParser = require('koa-body-parser');
const cors = require('@koa/cors');
require('dotenv').config();

const options = {
  origin: 'http://listmera.rocks',
  // origin: 'http://localhost:3000',
}

app.use(bodyParser())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())

//app.listen(process.env.PORT || 3000)

module.exports = app;
