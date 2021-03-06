'use strict';

const { libs, runtime } = nodex;
const { http } = libs;
const { logic } = runtime;

exports.init = async function (args) {
  console.log('serv init.');
  console.log('serv init args:', args);
  console.log('runtime:', runtime);

  const app = http.webapp(args);

  app.route(router => {
    router.get('/', http.handler(logic.helloWorld));
    // 随机生成姓名
    router.get('/name_generator', http.handler(logic.nameGenerator));
    router.post('/name_generator', http.handler(logic.nameGenerator));
  });

  app.start();
};
