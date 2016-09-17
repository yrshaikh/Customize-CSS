function CodeMirrorUtil() {    
}

CodeMirrorUtil.prototype.load = function (identifier) {
	var myCodeMirror = CodeMirror(document.getElementById("editor"), {
		value: "#body{font-size:12px;}\n",
		mode:  "css",
		lineNumbers: true,
		theme: "zenburn"
	});
};