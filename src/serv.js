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
    router.post('/name_generator', http.handler(logic.nameGenerator));
    router.post('/nickname_generator', http.handler(logic.nickNameGenerator));
    
  });

  app.start();
};
