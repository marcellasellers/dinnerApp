const mongoose = require('mongoose')
const validator = require('validator')
const mongoURL = 'mongodb://127.0.0.1:27017/users'
const dbName = 'findRestaurant'

mongoose.connect(mongoURL, { useNewUrlParser: true, useCreateIndex })

const userSchema = mongoose.model('User', {
    username: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if(!validator.isEmail(value)){
               throw new Error("Not an email")
            }
        },
        maxlength: 14,
        minlength: 6,
        trim: true
    },
    password: {
        type: String,
        maxlength: 14,
        minlength: 6,
        required: true,
        trim: true //remove whitespaces
    },
    topFive: Array,
    topRestaurant: {type: Schema.Types.ObjectId, ref: 'restaurantSchema'},
    location: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isPostalCode(value, 'US')){
                throw new Error('Must be a valid US postal code')
            }
        }
    },
})

const restaurantSchema = mongoose.model('Restaurants', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true
    },
    rating: Number
})

const newUser = new userSchema({
    username: 'Marcie',
    password: 'hello'
})

newUser.save().then((success) => {
    console.log(success)
}).catch((error) => {
    console.log(error)
})

