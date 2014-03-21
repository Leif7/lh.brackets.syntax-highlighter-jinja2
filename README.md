Enables syntax highlighting for Jinja2 in Brackets editor (http://brackets.io/)

IMPORTANT:
Highlighting is not automatic as HTML highlighting
will be used by Brackets for HTML files.

To use Jinja2 highlighter, first install 'Code Highlighter Switcher'
extension trough extension manager.
Then add following to its languages.json file:

    {
        "label": "Jinja2",
        "mode": "jinja2"
    },

Code Highlighter Switcher than can be used to switch between HTML and Jinja2
for .html (or other) files.

More details about Code Highlighter Switcher can be found on:
https://github.com/asotog/codehighlighter-switcher-bracketsio

=========================================================
Brackets for some reason only support these languages:
https://github.com/adobe/brackets/blob/master/src/language/languages.json
despite CodeMirror that Brackets use is supporting many more.

Fortunately, it's easy to add support for those through an extension:
https://github.com/adobe/brackets/wiki/Language-Support#defining-a-new-language
and that's why and how this extension has been created.
