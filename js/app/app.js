var tabId, tabUrl;
chrome.tabs.getSelected(null, function (tab) {
    tabId = tab.id;
    tabUrl = tab.url;
    console.log(tabId, tabUrl);
});

$(document)
    .ready(function () {
        var cssModifier = new CssModifier(tabId, tabUrl);
        cssModifier.update("body{background:pink !important;}");
    });