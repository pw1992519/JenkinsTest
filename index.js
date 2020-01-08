const Koa = require('koa');
const app = new Koa();
const _ = require('lodash');
 
app.use(async ctx => {
  ctx.body = 'Hello World22';
}); 
console.log(_.last([1, 2, 3]))  

app.listen(8001);