// Import the page-mod API
var pageMod = require("page-mod");
var self = require("self");
// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message

pageMod.PageMod({
  include: "*",
  contentScriptFile: self.data.url("zawgyiuni.js"),
  contentStyleFile: self.data.url("webfont.css"),
  contentScriptWhen : "end"
});
