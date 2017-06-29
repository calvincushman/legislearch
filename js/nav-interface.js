$(document).ready(function() {
  $('#leg-button').click(function() {
    $('.state-search').css('display', 'none');
    $('.legislator-search').css('display', 'flex');
    $('.contributor-page').css('display', 'none');
  });

  $('#state-button').click(function() {
    $('.state-search').css('display', 'flex');
    $('.legislator-search').css('display', 'none');
    $('.contributor-page').css('display', 'none');
  });
});
