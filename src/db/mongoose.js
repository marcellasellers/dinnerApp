const mongoose = require('mongoose')
const mongoURL = 'mongodb://127.0.0.1:27017/users'

mongoose.connect(mongoURL, { useNewUrlParser: true, useCreateIndex: true })

//how to create new user
/*const newUser = new userSchema({
    username: 'intro@gmail.com',
    password: 'hello123',
    location: "06880"
})

newUser.save().then((success) => {
    console.log(success)
}).catch((error) => {
    console.log(error)
})*/

