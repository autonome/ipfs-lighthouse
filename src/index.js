const ipfs = require('ipfs');

// register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

let text = "Aye."
let div = document.createElement('div');
div.textContent = text;
document.body.appendChild(div);
