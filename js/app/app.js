 var tabId, tabUrl;
chrome.tabs.getSelected(null, function (tab) {
    tabId = tab.id;
    tabUrl = tab.url;
});



$(document)
    .ready(function () {

        var origin = new URL(tabUrl).origin;
        chrome.storage.sync.get("css", function (obj) {
            var savedCss = "";
            if(obj && obj.css){
                savedCss = obj.css[origin];
            }
            $('#editor').val(savedCss);
            var codeMirrorUtil = new CodeMirrorUtil();
            codeMirrorUtil.load("editor");
        });
                

        $("#apply").click(function(){
            var cssModifier = new CssModifier(tabId, tabUrl);
            var value = rock.editor.getValue();
            var obj = {};
            obj[origin] = value;
            cssModifier.update(value);
            chrome.storage.sync.set({"css" : obj}, function() {
              //
            });            
        });

    });



