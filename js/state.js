var apiKey = require('./../.env').apiKey;


var State = function(query) {
  this.codes = [['ALABAMA', 'AL'], ['ALASKA', 'AK'], ['ARIZONA', 'AZ'], ['ARKANSAS', 'AR'], ['CALIFORNIA', 'CA'], ['COLORADO', 'CO'], ['CONNECTICUT', 'CT'], ['DELAWARE', 'DE'], ['FLORIDA', 'FL'], ['GEORGIA', 'GA'], ['HAWAII', 'HI'], ['IDAHO', 'ID'], ['ILLINOIS', 'IL'], ['INDIANA', 'IN'], ['IOWA', 'IA'], ['KANSAS', 'KS'], ['KENTUCKY', 'KY'], ['LOUISIANA', 'LA'], ['MAINE', 'ME'], ['MARYLAND', 'MD'], ['MASSACHUSETTS', 'MA'], ['MICHIGAN', 'MI'], ['MINNESOTA', 'MN'], ['MISSISSIPPI', 'MS'], ['MISSOURI', 'MO'], ['MONTANA', 'MT'], ['NEBRASKA', 'NE'], ['NEVADA', 'NV'], ['NEW HAMPSHIRE', 'NH'], ['NEW JERSEY', 'NJ'], ['NEW MEXICO', 'NM'], ['NEW YORK', 'NY'], ['NORTH CAROLINA', 'NC'], ['NORTH DAKOTA', 'ND'], ['OHIO', 'OH'], ['OKLAHOMA', 'OK'], ['OREGON', 'OR'], ['PENNSYLVANIA', 'PA'], ['RHODE ISLAND', 'RI'], ['SOUTH CAROLINA', 'SC'], ['SOUTH DAKOTA', 'SD'], ['TENNESSEE', 'TN'], ['TEXAS', 'TX'], ['UTAH', 'UT'], ['VERMONT', 'VT'], ['VIRGINIA', 'VA'], ['WASHINGTON', 'WA'], ['WEST VIRGINIA', 'WV'], ['WISCONSIN', 'WI'], ['WYOMING', 'WY']];
  var stateCode = "";
  this.codes.forEach(function(element) {
    if (query.toUpperCase() === element[1]) {
      stateCode = query.toLowerCase();
    } else if (query.toUpperCase() === element[0]) {
      stateCode = element[1].toLowerCase();
    }
  });
  this.stateCode = stateCode;
};

State.prototype.getLegislators = function(callback) {
  $.get(`http://www.opensecrets.org/api/?method=getLegislators&id=${this.stateCode}&apikey=${apiKey}&output=json`)
    .then(function(resp) {
      var legObj = JSON.parse(resp).response.legislator;
      callback(legObj);
      console.log(legObj);
    })
    .fail(function(error) {
      console.log(error);
    });
};

exports.stateModule = State;
