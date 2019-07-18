var express = require('express');
var path = require('path')
const hbs = require('hbs')

var app = express();

hbs.registerPartials(path.join(__dirname, '/views/partials'))

// Set view engine to hbs
app.set('view engine', 'hbs')

// Set up static directory to serve
app.use(express.static(path.join(__dirname, '/public')))

app.get('', (req, res) => {
    res.render('index', {
      title: 'NodePage',
      name: 'Marcie'
    })
})

// Catch all/error
app.get('*', (req, res) => {
  res.render('404', {
    message: 'ERROR!'
  })
})

app.listen(3000, () => {
  console.log('Server started!')
})
