const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const router = require('./router.js');
const bodyParser = require('koa-body-parser');
const cors = require('koa-cors');
require('dotenv').config();

const options = {
  origin: 'http://listmera.rocks',
}

app.use(bodyParser())
  .use(cors(options))
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(process.env.PORT || 3000)
