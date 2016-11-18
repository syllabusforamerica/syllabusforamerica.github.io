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

// getMainItems() function:
//  1. Sends request for all main items (top level items) in library
//  2. Gets response data
//  3. Writes data to file
function getMainItems() {
  const options = {
    url: apiItems,
    headers: {
      'User-Agent': 'request'
    }
  };
  function callback(error, response, body) {
    let mainItems = [];
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      //console.log('data.length is: ' + data.length);
      for (i=0; i<data.length; i++) {
        if (!data[i]['links']['up']) {
          mainItems.push(data[i]);
        }
      }
      //console.log('mainItems.length is: ' + mainItems.length);
      //console.log(mainItems);
      fs.writeFile('_data/zoteroMainItems.json', JSON.stringify(mainItems, null, 2));
    }
  }
  request(options, callback);
  return;
}


// Invoke each function
getTags();
getItems();
// getMainItems();// THIS MAY NOT NEED TO BE USED

/*
  REFERENCES
  - https://github.com/request/request#custom-http-headers -- this provided the code used above using request()
  - https://github.com/johnotander/css-properties/blob/master/build.js -- this provided the fs.writeFile code
  - zotero api docs -- https://www.zotero.org/support/dev/web_api/v3/basics
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  - http://stackoverflow.com/a/7220510/2145103
  - https://nodejs.org/docs/latest/api/fs.html#fs_fs_writefile_file_data_options_callback
*/
