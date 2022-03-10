import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./App.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';

function changeColor() {
    document.getElementById("a").onclick = updateCL();
}



export default function Circle() {
    let buttonOne = document.querySelector('#one');
    buttonOne.addEventListener('click', () => buttonOne.style.backgroundColor = '#00FF00')
    return (
        <Grid container justify={'center'}>
            <button id="one" class="button button5"></button>
        </Grid>
    );
}          