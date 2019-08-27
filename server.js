const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve( path.join(__dirname, 'public'), 'index.html'));
});

app.listen(port);