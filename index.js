var express =  require('express');
var fallback = require('express-history-api-fallback');
var server = express();
var root = 'dist/prod';
server.use('/', express.static( root ));
server.use(fallback('index.html', { root }));
server.listen(process.env.PORT || 5555, function(error){
  console.log('error', error);
});
