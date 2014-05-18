define(function (require, exports, module) {
  'use strict';
  var LanguageManager = brackets.getModule("language/LanguageManager");

  LanguageManager.defineLanguage("jinja2", {
    name: "Jinja2",
    mode: "jinja2",
    fileExtensions: ["html"],,
    blockComment: ["{#", "#}"]
  });

  CodeMirror.defineMode("jinja2mixed", function(config, parserConfig) {
    return CodeMirror.overlayMode(CodeMirror.getMode(config, parserConfig.backdrop || "text/html"), CodeMirror.modes.jinja2());
  });

  LanguageManager.defineLanguage("jinja2mixed", {
    name: "Jinja2mixed",
    mode: "jinja2mixed",
    fileExtensions: ["twig", "html.twig"],
    blockComment: ["{#", "#}"]
  });

});
