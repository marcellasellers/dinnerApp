import React from 'react'
import ReactDOM from 'react-dom'
import DinnerApp from './components/DinnerApp.js'
import '../public/stylesheets/landing.css';

const appRoot = document.getElementById('app');
ReactDOM.render(<DinnerApp/>, appRoot);
