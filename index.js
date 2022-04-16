"use strict";

/* footer start */

let currentDate = new Date();

// alert('hello world!');

let ftContainer = document.getElementById('ftContainer');

let spanYear = document.createElement('span');
spanYear.innerText = 'BBTS 스킨 Copyrightⓒ' + currentDate.getFullYear() + ' by ';
// BBTS - basic bootstrap tistory skin 

let codinggakLink = document.createElement('a');
codinggakLink.innerText = 'CodingGak';
codinggakLink.href = 'https://digiconfactory.tistory.com';
codinggakLink.target = '_blank';

ftContainer.appendChild(spanYear);
ftContainer.appendChild(codinggakLink);

/* footer end */