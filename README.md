# McDonalds-DOM-manipulation

Welcome to my McDonald's website clone project, using JavaScript to manipulate the DOM.

## Description

This clone is based on the URL:(https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-food-experts.html), and aims at mimicing structuring, layout and styling as much as possible. 

## Structuring

I have structured the website using the appropriate layout, such as grid or flexbox, mainly by oberving the page and tried to limit my usage of Chrome DevTools to the bare minimums such as font-sizes, exact background color codes etc.

## Special JavaScript features

To limit duplicating code I have made functions to create repetitive code for instance for styling similar elements. I also added a addEventListener to turn an arrow icon on mouse clicks.

## Additional notes

### Gulpfile automation
I have created a gulpfile.js to minify HTML, CSS and JS, as well as compile .scss to .css. This gulpfile also watches for changes, and then writes all of the source code file in src/ subfolder into the dist/ subfolder (not in version control). This automates the process workflow and is easily done by simply running 'gulp' in the command line in the root directory. (gulp-uglify had to be replaced with gulp-terser, as gulp-uglify does not support ES6 at this time)