var express = require('express');
var path = require('path')
const hbs = require('hbs')
var findFood = require('./utils/restaurants')
var app = express();
const port = process.env.PORT  || 3000



//findFood(0,0,0)

hbs.registerPartials(path.join(__dirname, '../views/partials'))

// Set view engine to hbs
app.set('view engine', 'hbs')

// Set up static directory to serve
app.use(express.static(path.join(__dirname, '../public')))

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


app.listen(port, () => {
  console.log('Server started at ' + port)
})
