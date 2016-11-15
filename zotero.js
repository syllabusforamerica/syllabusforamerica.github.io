/*

  1. get set of all tags in the library

*/


const baseApiPrefix = 'https://api.zotero.org/';
const groupID = '814853';
const baseApiSufix = 'groups/' + groupID + '/';
const api = baseApiPrefix + baseApiSufix;

// The set of all tags in the library
const allTagsAPI = api + 'tags';

function getAllTags(url) {
  //set up tags array
  let tags = []

  //get data
  $.getJSON(url, function(data) {
    console.log(data[0]["tag"]);
    // if (data.streams[0] !== undefined) {
    //   /*onlineUsers.push(name);
    //   console.log('User ' + data.streams[0].channel.display_name + ' is online!');
    //   console.log("The online users are: " + onlineUsers);*/
    //   Data.innerHTML += '<a class="block hover-bg-gray lg-col-9 md-col-11 mx-auto no-underline pointer"href="' + data.streams[0].channel.url + '"><div class="border-left border-right border-top p2"><div class="flex flex-column flex-center sm-flex-row"><div class=flex-none><img class="circle hunnid"src="' + data.streams[0].channel.logo + '"><p class="m0 h5 sm-center">' + data.streams[0].viewers + ' viewers</div><div class="py2 px2 sm-py0 sm-flex-auto"><h1 class="m0 break-word h2 md-h1">' + data.streams[0].channel.display_name + '</h1><h2 class="m0 break-word h4 md-h2">' + data.streams[0].game + '</h2></div><img class=sm-flex-none src="'  + data.streams[0].preview.medium + '"width=214></div></div></a>';
    // }//if
    for (i=0; i<data.length; i++) {
      tags.push(data[i]["tag"]);
    }
    console.log('the tags array is: ' + tags);
  });//getJSON
}//getAllTags

getAllTags(allTagsAPI);
