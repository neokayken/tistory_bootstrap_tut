"use strict";

/* footer start */

let ftContainer = document.getElementById('ftContainer');
let currentDate = new Date();

let spanYear = document.createElement('span');
let selectedNode = document.getElementById('cr-info');
let parentNode = document.getElementById('cr-info').parentNode;

spanYear.innerText = 'ⓒ' + currentDate.getFullYear() + '. ';

parentNode.insertBefore(spanYear, selectedNode);

let skinDesign = document.createElement('span');
let dLink = document.createElement('a');

// B5T skin -> Bootstrap 5 Tistory skin
skinDesign.innerText = 'B5T skin by ';
dLink.innerText = 'CodingGak';
dLink.href = 'https://digiconfactory.tistory.com';
dLink.target = '_blank';

skinDesign.appendChild(dLink);
ftContainer.appendChild(skinDesign);

/* footer end */