const fs = require('fs');
const request = require('request');

// Zotero APIs
const api = 'https://api.zotero.org/groups/814853/';
const apiTags = api + 'tags';
const apiItems = api + 'items';


// getTags() function:
//  1. Sends request for set of library tags
//  2. Gets response data
//  3. Writes data to file
function getTags() {
  const options = {
    url: apiTags,
    headers: {
      'User-Agent': 'request'
    }
  };
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      fs.writeFile('_data/zoteroTags.json', body);
    }
  }
  request(options, callback);
  return;
}


// getItems() function:
//  1. Sends request for all items in library
//  2. Gets response data
//  3. Writes data to file
function getItems() {
  const options = {
    url: apiItems,
    headers: {
      'User-Agent': 'request'
    }
  };
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      fs.writeFile('_data/zoteroItems.json', body);
    }
  }
  request(options, callback);
  return;
}


// Invoke each function
getTags();
getItems();

/*
  REFERENCES
  - https://github.com/request/request#custom-http-headers -- this provided the code used above using request()
  - https://github.com/johnotander/css-properties/blob/master/build.js -- this provided the fs.writeFile code
  - zotero api docs -- https://www.zotero.org/support/dev/web_api/v3/basics
*/
