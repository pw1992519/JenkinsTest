const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World1';
}); 
console.log('aaaa')  

// app.listen(3000);