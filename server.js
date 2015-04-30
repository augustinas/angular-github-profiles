var port = process.env.PORT || 5000;
var express = require('express');
var app = express();

app.use(express.static('./public'));

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index', {name: 'You choose'});
});

app.listen(port, function () {
  console.log('server listening on port ' + port);
});
module.exports = app;