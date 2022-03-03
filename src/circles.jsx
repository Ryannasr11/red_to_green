import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import EmojiPicker from "./EmojiPicker";

import useMorse from "./useMorse";

import logo from "./logo.png";
import "./App.css";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export function Circle1 () {
    return (
        <span class="dot"></span>
    )
}

export function Circle2 () {
    return (
        <span class="dot2"></span>
    )
}