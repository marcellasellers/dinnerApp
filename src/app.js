import React from 'react'
import ReactDOM from 'react-dom'
import DinnerApp from './components/DinnerApp.js'
import Search from './components/Search.js'
import css from '../public/stylesheets/landing.css';

class User {
    constructor (name = 'Anon', location) {
        this.name = name;
        this.location = location;
        this.favRestaurants = [];
    };

    addRestaurant (restaurant) {
        this.favRestaurants.push(restaurant);
    };

    updateName (newName) {
        this.name = newName;
    };

    updateLocation (newLocation) {
        this.location = newLocation;
    };
};
const me = new User('Marcie', 'Zd');

const appRoot = document.getElementById('app');
ReactDOM.render(<DinnerApp user={me}/>, appRoot);
