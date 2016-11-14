var slug = require('slug');
var print = console.log.bind(console, '>');
print(slug('i ♥ unicode'));

const articles = [
  {
    "link": "http://www.nytimes.com/2016/11/11/magazine/a-time-for-refusal.html?_r=0",
    "title": "A Time for Refusal",
    "source": "New York Times Magazine",
    "tags": ["hate crimes","totalitarianism","trump","conformity","mob mentality"],
    "author": "Teju Cole",
    "date": "2016-11-11",
    "abstract": "Links between an allegorical/absurdist play written by Eugène Ionesco in 1958, in response to totalitarian movements in Europe, and normalization of a Trump presidency that is going on in the days after the election.",
    "quote": "Evil settles into everyday life when people are unable or unwilling to recognize it. It makes its home among us when we are keen to minimize it or describe it as something else. This is not a process that began a week or month or year ago. It did not begin with drone assassinations, or with the war on Iraq. Evil has always been here. But now it has taken on a totalitarian tone.",
    "comment": "",
    "seeAlso": "https://en.wikipedia.org/wiki/Rhinoceros_(play)"
  },
  {
    "link": "http://www.nytimes.com/2016/11/12/opinion/bernie-sanders-where-the-democrats-go-from-here.html?smprod=nytcore-iphone&smid=nytcore-iphone-share",
    "title": "Bernie Sanders: Where the Democrats Go From Here",
    "source": "New York Times",
    "tags": ["bernie sanders","populism","mandate","trump"],
    "author": "Bernie Sanders",
    "date": "2016-11-11",
    "abstract": "Bernie situates himself (and progressives generally) in relation to a Trump presidency, arguing that Trump's election is a mandate to protect the interests of the working class. Insofar as Trump implements policies in support of this mandate, Bernie promises to support him. Insofar as he uses his power to harm the underclass, Bernie will fight him.",
    "quote": "President-elect Trump is right: The American people want change. But what kind of change will he be offering them? Will he have the courage to stand up to the most powerful people in this country who are responsible for the economic pain that so many working families feel, or will he turn the anger of the majority against minorities, immigrants, the poor and the helpless?",
    "comment": "I appreciate your forced optimism Bernie, but we can be sure he won't actually do any of that. He has already proposed the CEO of Stanley Morgan as Secretary of Treasury. It remains business as usual.” [link to appointments page re: the CEO of Stanley Morgan] -Chase",
    "seeAlso":""
  },
  {
    "link": "http://www.bonappetit.com/story/restaurant-industry-under-trump-presidency",
    "title": "What Will a Trump Presidency Mean for the Restaurant Industry?",
    "source": "Bon Appetit",
    "tags": ["undocumented immigrants", "deportation", "restaurant industry", "trump"],
    "author": "Benjamin Miller",
    "date": "2016-11-11",
    "abstract": "Writen by a white male citizen who owns a restaurant with his wife, who is an undocumented immigrant from Mexico, the article explores their initial rections to a Trump presidency.",
    "quote": "We need to use the visibility and cultural strength that the restaurant industry wields to fight for human rights.",
    "comment":"",
    "seeAlso":""
  }
];

function tagList(articles) {
  // set up the tags array, slug tags array, and the user filters input array
  let tags = [];
  let slugTags = [];
  let filters = [];


  for (i = 0; i < articles.length; i++) {
    for (x = 0; x < articles[i]["tags"].length; x++) {
      //console.log('article ' + articles[i]["title"] + ' contains the tag ' + articles[i]["tags"][x] + '!');
      //console.log(articles[i]["tags"][x]);
      if (tags.indexOf(articles[i]["tags"][x]) === -1) {
        tags.push(articles[i]["tags"][x]);
        slugTags.push(slug(articles[i]["tags"][x]));
      }
    }
  }

  console.log('the tags array is: ' + tags);
  return slugTags;
}

tagList(articles);
print(tagList(articles));