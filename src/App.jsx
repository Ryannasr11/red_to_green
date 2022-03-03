import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import EmojiPicker from "./EmojiPicker";

import useMorse from "./useMorse";

import logo from "./logo.png";
import "./App.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

let buttonClicked = 0;

export default function Circle() {
    while (buttonClicked < 1) {
        return (
            <Grid container justify={'center'}>
                <Button
                    onClick={() => {
                        buttonClicked = 1;
                    }}
                >
                    <span class="dot"></span>
                </Button>
            </Grid>     
        );
    }
    if (buttonClicked = 1) {
        return (
            <span class="dot2"></span>
        )
    }
}
