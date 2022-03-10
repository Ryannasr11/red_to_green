import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

document.querySelector("button").addEventListener('click', function(event) {
    document.querySelector("button").style.backgroundColor = '#00FF00';
    event.currentTarget.setAttribute("disabled", true);
}, {
    once: true
});