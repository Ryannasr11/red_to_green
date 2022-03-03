import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import EmojiPicker from "./EmojiPicker";

import useMorse from "./useMorse";

import logo from "./logo.png";
import "./App.css";

export default function QrCode() {
    <div id="qrcode">
        <script type="text/javascript">
            new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
        </script>
    </div>
}