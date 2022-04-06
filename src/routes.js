const {addBookHandler} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addBookHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
];
