import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

document.querySelector("button").addEventListener('click', function(event) {
    event.currentTarget.setAttribute("disabled", true);
}, {
    once: true
});