# Dev notes

Tasks:
1. traverse all articles to pop all unique tags into an array, which the array then feeds the sidebar list of all tag/categories
2. upon user tag selection, traverse all article tags, if user selection is not present hide the article; allow the user to add more selections to the selection array,
3. Put all `_posts` files into separate objects within one root array.

---

I'm not sure about using Jekyll to roll out the web app on the fly every time someone goes to the web site. Instead, I think we can introduce a pre-build step that uses javascript to create static data which can then be passed to Jekyll for creating the static html output. This static data consists of
  1) creating the set of unique tags in the collection for navigation, and
  2) adding classes (or data-* attributes) to every `<article>` as the basis on which articles stick around after a user selects one or more tags.

The current plan is to write javascript, which will be embedded in Jekyll's static html output, that will perform the hiding-articles-per-tag-selected behavior. I will have to figure out how to modify isotope to allow for multiple filters versus only allowing one filter per button-group to initiate behavior.




---

Here was the npm script code that didn't use postcss-cli config file and didn't behave as expected, although the config file approach did:

```json
"build-css": "postcss -u postcss-import postcss-cssnext postcss-custom-properties postcss-custom-media -o css/syllabus.css css/src/index.css"
```


---

Here's documentation for how I troubleshooted the weird comments not being removed via cssnano:

cssnano author suggested this to me via gitter:

> Hi! It might be this issue https://github.com/ben-eb/cssnano/issues/90#issuecomment-191994202

Two workarounds to this issue were brought up in the !gh issues thread:
1. add cssnano _before_ cssnext in your postcss plugins
2. pass {filterPlugins: false} (this is all that was mentioned, no one actually provided an example of how or where to pass {filterPlugins: false}'  ')

I first tried solution 2, and it worked. Here is how and where I passed the `filterPlugins` option:


```json
//postcss.config.json
{
  "use": ["postcss-import", "postcss-cssnext", "postcss-custom-properties", "postcss-custom-media", "cssnano"],
  "input": "css/src/index.css",
  "output": "css/syllabus.css",
  "cssnano": {
    "filterPlugins": false
  }
}
```

The output was now what I expected.

I also tried the first solution of simply changing the listed plugin order. This also resulted in the expted output. So while both options work, I am choosing to go with the first solution since there is less code involved.


---

<!--
REFERENCES
- https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes
-->
