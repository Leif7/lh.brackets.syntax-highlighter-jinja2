define(function (require, exports, module) {
  'use strict';

  var LanguageManager = brackets.getModule("language/LanguageManager");

  LanguageManager.defineLanguage("jinja2", {
      name: "Jinja2",
      mode: "jinja2",
      fileExtensions: ["html"],
  });
});
