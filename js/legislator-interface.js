var Legislator = require('./../js/legislator.js').legislatorModule;
var displayContributors = function(legislator, contributors) {
  $('#name').text(legislator.name);
  $('#party').text(`Party: ${legislator.party}`);
  $('#office').text(`Office: ${legislator.office}`);
  $('.contributor-web').empty();
  contributors.contributor.forEach(function(element) {
    $('.contributor-web').append(`<div class="donor">` + `<h2>${element["@attributes"].org_name}</h2>` +
    `<h4>Individual Donations: $${element["@attributes"].indivs}</h4>` +
    `<h4>PAC Donations: $${element["@attributes"].pacs}</h4>` +
    `<h4>Total Donations: $${element["@attributes"].total}</h4></div>`)
  });
};
var contribClickHandler = function(element) {
  $('.state-legislator').last().click(function() {
    // console.log($(this)[0].dataset.cid); //An alternate way to access the CID of the clicked li.
    var ourLegislator = new Legislator(element["@attributes"].firstlast, element["@attributes"].party, element["@attributes"].office, element["@attributes"].cid);
    ourLegislator.getContributors(displayContributors);

    $('.state-search').css('display', 'none');
    $('.legislator-search').css('display', 'none');
    $('.contributor-page').css('display', 'flex');
  });
};
