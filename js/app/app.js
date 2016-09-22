 var tabId, tabUrl;
// chrome.tabs.getSelected(null, function (tab) {
//     tabId = tab.id;
//     tabUrl = tab.url;
// });



$(document)
    .ready(function () {
        // var cssModifier = new CssModifier(tabId, tabUrl);
        // cssModifier.update("body{background:pink !important;}");

        chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
            console.log(tab.url);
        });

        var codeMirrorUtil = new CodeMirrorUtil();
        codeMirrorUtil.load("editor");

        $("#apply").click(function(){
            var cssModifier = new CssModifier(tabId, tabUrl);
            cssModifier.update(rock.editor.getValue());
        });

    });

