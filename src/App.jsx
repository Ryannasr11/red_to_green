import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./App.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

let n = 1;

export default function Circle() {
    return (
        <Grid container justify={'center'}>
            <Button>
                <span class="dot"></span>
            </Button>
        </Grid>     
    );
}
                