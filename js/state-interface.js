var State = require('./../js/state.js').stateModule;
var showLegislators = function(response) {
  //Do some jQuery to each legislator in the response object. Probably put their name in the DOM and stick their cid in a data tag.
};

$(document).ready(function() {
  var foundState = new State($('input[name="search-bar"]').val());
  foundState.getLegislators(showLegislators);
});
