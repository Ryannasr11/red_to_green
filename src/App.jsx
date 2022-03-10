import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./App.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';


export default function Circle() {
    let button = document.getElementById("button");

    button.addEventListener("click", () => {
        button.classList.toggle('clicked');
    })
    return (
        <Grid container justify={'center'}>
            <button id="button"></button>
        </Grid>
    );
}          