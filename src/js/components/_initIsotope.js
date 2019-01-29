/* eslint-disable */
var Isotope = require("isotope-layout");

var iso = new Isotope(".js-filter", {
  itemSelector: ".work",
  masonry: {
    columnWidth: ".grid-sizer",
    gutter: '.gutter-sizer'
    // columnWidth: 300
  }
});
