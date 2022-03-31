import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

let clicked = 0;

document.querySelector("button").addEventListener('click', function(event) {
    document.querySelector("button").style.backgroundColor = '#009900';
    event.currentTarget.setAttribute("disabled", true);
    clicked = 1
}, {
    once: true
});

