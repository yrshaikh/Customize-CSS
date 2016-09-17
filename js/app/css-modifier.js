function CssModifier(tabId, tabUrl) {
    this.tabId = tabId;
    this.tabUrl = tabUrl;
}

CssModifier.prototype.update = function (css) {
    console.log(this.tabId, css);
    chrome.tabs.insertCSS(this.tabId, { code: css }, function () {
        console.log("css modified");
    });
};