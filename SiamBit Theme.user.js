// ==UserScript==
// @name         SiamBit Theme
// @namespace    http://tampermonkey.net/
// @version      2024-06-14
// @description  For change BearBit to SiamBit
// @author       PINKYPIE20
// @match        https://bearbit.co/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    console.log("======== RUNNING ...... ========");
    document.querySelector("link[href='1.css']").href = "https://pinkypie20.github.io/siambit.css";
    document.getElementsByTagName("tbody")[0].innerHTML = '<td class="bottom" style="padding-right: 5px"><img src="https://pinkypie20.github.io/logo_siambit.gif" width="341" height="85"></td>';
    console.log("======== END !!!        ========");
})();