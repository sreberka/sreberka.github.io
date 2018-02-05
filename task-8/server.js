const express = require('express');
const app = express();
const port = 8000;
const router = require('./routes/index');

const exphbs  = require('express-handlebars');
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.use('/', router);

app.route('/*')
    .get(function(req, res) {
        res.render('error');
    });

app.use(function(err, req, res, next) {
    console.error(err);
    res.status(500).send('Wrong page!');
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});