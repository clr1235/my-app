const Koa = require('koa');
const Router = require('koa-router');   /*引入是实例化路由** 推荐*/
//glob
const glob = require('glob');
const {resolve} = require('path');
const fs = require('fs');
const logger = require('koa-logger');

// 实例化
const app = new Koa();
const router = new Router({
  prefix: '/api'
})
const routerMap = {}; //路由映射

app.use(logger());

//注册路由
glob.sync(resolve('./api', "**/*.json")).forEach((item, i) => {
  let apiJsonPath = item && item.split('/api')[1];
  let apiPath = apiJsonPath.replace('.json', '');

  router.get(apiPath, (ctx, next) => {
    try {
      let jsonStr = fs.readFileSync(item).toString();
      ctx.body = {
        data: JSON.parse(jsonStr),
        state: 200,
        type: 'success'
      }
    } catch(err) {
      ctx.throw('服务器错误', 500)
    }
  })
  routerMap[apiJsonPath] = apiPath;
})

fs.writeFile('./routerMap.json', JSON.stringify(routerMap, null, 4), err => {
  if(!err){
    console.log('路由地图生成成功')
  }
})


app
  .use(router.routes())
  .use(router.allowedMethods())

/*
 * router.allowedMethods()作用： 这是官方文档的推荐用法,我们可以
 * 看到 router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有
 * 路由中间件最后调用.此时根据 ctx.status 设置 response 响应头 
 *
 */

app.listen(4000);
