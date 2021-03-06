const express = require('express');
const handlebars = require('express-handlebars')
                  .create({defaultLayout: 'main'});
const copypasta = require('./lib/copypasta');
const app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('home', { pasta: copypasta.getPastas() });
});


// 404 Response
app.use(function(req, res) {
  res.status(404);
  res.render('404');
});

// 500 Response
app.use(function(req, res) {
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  // console.log(`Express started on http://localhost.com:${app.get('port')}
  //   press Ctrl + C to exit`);
});


