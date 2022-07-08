# Clarifications needed

## Intro

This was interesting.
I took the opportunity to learn more about Vue 3 and Vuex, as I had never used those before.
Our projects use Vue 2 and a redux store.
Overall, it was nice, although a bit long.

## Backend

I had some issues with mocky and cors on POST action. 
It works some times, but most often it fails.
I have created a new mocky with more items.
For now, I have mocked the update to return the submitted data.

## Todo / Out of Scope
- SEO review, for now added some basic tags, and kept document structure seo friendly
- Analytics click hook implemented, refactor to trigger analytics
- i18n is out of scope
- Buttons may be too small on mobile
- should empty list handling be implemented ?
- enable upload only when data has changed ?
- handle loading message
- handle loading error notification
- handle update error notification
- handle empty voice / text on save
- checkbox checked state is not on vuex store, but is updated on markup and aria
- styled checkbox is not tabbable using keyboard navigation
- refactor checkbox into component
- refactor main/common theme colors/etc as variables

unit tests
