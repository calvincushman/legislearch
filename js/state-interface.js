var State = require('./../js/state.js').stateModule;
var Legislator = require('./../js/legislator.js').legislatorModule;

var showLegislators = function(state, response) {
  $('.scroll-window ul').empty();
  $('.state-name').text(`${state.stateName} LEGISLATORS`)
  response.forEach(function(element) {
    $('.scroll-window ul').append(`<li class="state-legislator" data-cid="${element["@attributes"].cid}">${element["@attributes"].firstlast}</li>`);
    contribClickHandler(element);
  });
};

$(document).ready(function() {
  $('.state-search-form').submit(function(e) {
    e.preventDefault();
    var foundState = new State($('input[name="search-bar"]').val());
    foundState.getLegislators(showLegislators);

    $('.state-search').css('display', 'none');
    $('.legislator-search').css('display', 'flex');
    $('.contributor-page').css('display', 'none');
  });
});
