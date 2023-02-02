'use strict';

const focusEl = document.querySelector('.focus-div');
const inputEl = document.getElementById('text-input');

function addClass() {
    focusEl.classList.toggle('active');
}

inputEl.addEventListener('focusin', addClass);
inputEl.addEventListener('focusout', addClass);