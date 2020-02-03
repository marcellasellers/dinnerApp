const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve( path.join(__dirname, 'public'), 'index.html'));
});

app.get('https://api.yelp.com/v3/businesses/search', (req, res) => {
    const term = req.params.term;
    const city = req.params.city;
    const state = req.params.state;


    res.sendFile(path.resolve( path.join(__dirname, 'public'), 'index.html'));
});
app.listen(port);