var Legislator = require('./../js/legislator.js').legislatorModule;
var setText = function(text) {
  // $('body').text(text);
}


$(document).ready(function() {
  var ourLegislator = new Legislator();
  ourLegislator.getLegislators("N00033474", setText);
});
