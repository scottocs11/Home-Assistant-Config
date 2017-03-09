// ==UserScript==
// @name         Home Assistant Camera Columns
// @version      0.1
// @description  Creates 2 camera columns. Find updates here: gitlab.com/scottocs/Home-Assistant
//               Make sure to modify the match link below to the URL of your cameras
// @author       ScottocS
// @match        http://*:8123/states/group.cameraview
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

//Changes size of camera view and changes number of columns
//Set the max-width and column-count to your preferred settings
addGlobalStyle('.column.ha-cards { max-width: 70% !important; column-count: 2 !important; }');