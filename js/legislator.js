var apiKey = require('./../.env').apiKey;

var Legislator = function(cid) {
  this.cid = cid;
};

Legislator.prototype.getContributors = function(callback) {
  $.get(`http://www.opensecrets.org/api/?method=candContrib&cid=${this.cid}&apikey=${apiKey}&output=json&cycle=2016`)
    .then(function(resp) {
      var respObj = JSON.parse(resp).response.contributors;
      console.log(respObj);
    })
    .fail(function(error) {
      console.log(error);
    });
};

exports.legislatorModule = Legislator;
