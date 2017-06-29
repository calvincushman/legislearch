var Legislator = require('./../js/legislator.js').legislatorModule;
var displayContributors = function(text) {
  // $('body').text(text);
}


$(document).ready(function() {
  $('.state-legislator').click(function(event) {
    console.log('ping!');
    console.log(event[0]['data-cid']);
    // var ourLegislator = new Legislator(event[0]['data-cid']);
  });
});
