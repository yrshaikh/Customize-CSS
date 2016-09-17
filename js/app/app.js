$(document)
    .ready(function() {
        //applyCss();
    });

chrome.tabs.getSelected(null, function (tab) {
    var tabId = tab.id;
    var tabUrl = tab.url;
    console.log(tabId, tabUrl);
    applyCss(tabId);
});

function applyCss(tabId) {
    chrome.tabs.insertCSS(tabId, { code : "body{background:green}" }, function(a, b, c) {
        console.log("css applied", a, b, c);
    });
}

