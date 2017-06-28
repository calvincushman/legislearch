var apiKey = require('./../.env').apiKey;

var Legislator = function() {
};

Legislator.prototype.getLegislators = function(query, callback) {
  $.get(`http://www.opensecrets.org/api/?method=getLegislators&id=${query}&apikey=${apiKey}&output=json`)
    .then(function(resp) {
      var legObj = JSON.parse(resp).response.legislator['@attributes'];
      callback(legObj.firstlast);
      console.log(legObj);
    });
};

Legislator.prototype.getContributors = function(cid, callback) {
  $.get(`http://www.opensecrets.org/api/?method=candContrib&cid=${cid}&apikey=${apiKey}&output=json&cycle=2016`)
    .then(function(resp) {
      var respObj = JSON.parse(resp).response.contributors;
      callback(respObj.contributor[0]['@attributes'].pacs);
      console.log(respObj);
    });
};

exports.legislatorModule = Legislator;
