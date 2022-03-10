import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./App.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';

// document.querySelector("button").addEventListener('click', function(event) {
//     event.currentTarget.setAttribute("disabled", true);
//   }, {
//       once: true
//   });

export default function Circle() {
    return (
        <Grid container justify={'center'}>
            <button class="button button5"></button>
        </Grid>
    );
}          