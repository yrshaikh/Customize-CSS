var tabId, tabUrl;
chrome.tabs.getSelected(null, function (tab) {
    tabId = tab.id;
    tabUrl = tab.url;
});

$(document)
    .ready(function () {
        var cssModifier = new CssModifier(tabId, tabUrl);
        cssModifier.update("body{background:pink !important;}");

        var codeMirrorUtil = new CodeMirrorUtil();
        codeMirrorUtil.load(".title");
    });

