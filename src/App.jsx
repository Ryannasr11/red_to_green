import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import EmojiPicker from "./EmojiPicker";

import useMorse from "./useMorse";

import logo from "./logo.png";
import "./App.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { Circle1, Circle2 } from "./circles"

let buttonClicked = 0;
let n = 1;

export default function Circle() {
    while (n > 0) {
        switch (buttonClicked) {
            case 0:
                return (
                    <Grid container justify={'center'}>
                        <Button
                            onClick={() => {
                                buttonClicked = 1;
                            }}
                        >
                            <Circle1 />
                        </Button>
                    </Grid>     
                );
                break;
            case 1:
                return (
                    <Grid container justify={'center'}>
                        <Circle2 />
                    </Grid>     
                );
                break;
        }
        
    }
}
