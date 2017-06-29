var State = require('./../js/state.js').stateModule;
var Legislator = require('./../js/legislator.js').legislatorModule;
//NOTE: Figure out how to move this back to legis-interface:
var displayContributors = function() {
  // $('#name').text()
}

var showLegislators = function(response) {
  response.forEach(function(element) {
    $('.scroll-window ul').append(`<li class="state-legislator" data-cid="${element["@attributes"].cid}">${element["@attributes"].firstlast}</li>`);
    //NOTE: This is poor separation of concerns, should be in legis-interface:
    $('.state-legislator').last().click(function(event) {
      // console.log($(this)[0].dataset.cid); //An alternate way to access the CID of the clicked li.
      console.log(element["@attributes"].cid);
      var ourLegislator = new Legislator(element["@attributes"].cid);
      ourLegislator.getContributors();
    });
  });
};

$(document).ready(function() {
  var foundState = new State($('input[name="search-bar"]').val());
  foundState.getLegislators(showLegislators);
});
