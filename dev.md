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
