const urlParams = new URLSearchParams(window.location.hash.substring(1));
const searchTerm = urlParams.get('gsc.q');

if (searchTerm) {
  document.title = `"` + searchTerm + `"` + " on Relic";
}

var lastUrl = window.location.href;

setInterval(function() {
    if (window.location.href !== lastUrl) {
        lastUrl = window.location.href;
        location.reload();
    }
}, 0);