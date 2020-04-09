var express = require('express');

var app = express();
app.get('/:number', function(req, res) {
    var names = ['Robert', 'Jack', 'David'];
    res.render('page.ejs', {counter: req.params.number, names: names});
});

app.listen(8081);