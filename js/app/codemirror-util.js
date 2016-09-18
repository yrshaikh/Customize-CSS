var rock = 
{
    beautify_in_progress: false,
    editor: null // codemirror editor
};
function CodeMirrorUtil() {    
}

CodeMirrorUtil.prototype.load = function (identifier) {
	var textArea = $('#editor')[0];    
    rock.editor = CodeMirror.fromTextArea(textArea, {
            theme: 'ambiance',
            lineNumbers: true,
            mode:  "css",
			matchBrackets: true,
			lineNumbers: true,
			extraKeys: {"Ctrl-Space": "autocomplete"},
			value: document.documentElement.innerHTML
    });
    rock.editor.focus();
};