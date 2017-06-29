var apiKey = require('./../.env').apiKey;

var Legislator = function(name, party, office, cid) {
  this.name   = name;
  this.party  = party;
  this.office = office;
  this.cid    = cid;
};

Legislator.prototype.getContributors = function(callback) {
  var legislator = this;
  $.get(`http://www.opensecrets.org/api/?method=candContrib&cid=${this.cid}&apikey=${apiKey}&output=json&cycle=2016`)
    .then(function(resp) {
      var respObj = JSON.parse(resp).response.contributors;
      callback(legislator, respObj)
      console.log(respObj);
    })
    .fail(function(error) {
      console.log(error);
    });
};

exports.legislatorModule = Legislator;
