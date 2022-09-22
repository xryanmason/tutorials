# Introduction
This tutorial explains how to make a 3x3 grid using CSS grid. In a future lesson, this grid will be used as a gameboard, where a game piece can move around by pressing keys on the keyboard.

# Review
The basics of HTML and CSS were covered in a previous lesson. If you get stuck, consider reviewing those concepts.

# Bonus

## Concepts

**Comments** - notes that developers can leave in their code that don't have any functionality, intended for other developers or your future self

## Example
Comments have different syntax, depending on what language you're using.
```HTML
<!-- index.html -->
```
```CSS
/* styles.css */
```
```JavaScript
// scripts.js
```

Feel free to write some comments during the tutorial.

# Classes

**Class** - an HTML element attribute that can be referenced by CSS and JavaScript
- Code: `<button class="special-button">Click me!</button>`, where `special-button` is the name of the class

## Example
The following example adds a class to a button and makes the button text color red:
```HTML
<!-- index.html -->
<button class="special-button">Click me!</button>
```
```CSS
/* styles.css */
.special-button {
    color: red;
}
```

Notice that in the `styles.css` file, the class is referenced by using a period followed by the class name.

## Exercise
1. In File Explorer, create a new folder where your tutorial files will live
2. In VS Code, open the folder that you created
3. Create a new file called `index.html` and add the following:
```HTML
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="grid">
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
  </div>
</body>
</html>
```

## Exercise Recap
In a previous lesson, we discussed the basic boilerplate, or scaffolding, of an HTML file, how to reference a CSS file, elements, and tags.

`<div>` - an HTML element meant for the division of content; commonly used as a default element when a better semantic element is not available

`class="grid"` - a class attribute with the value "grid"

`class="tile"` - a class attribute with the value "tile"

We'll style our grid and tiles by targeteting the classes using CSS.

## Exercise
1. Create a file called `styles.css`
2. Add the following:
```CSS
/* styles.css */
body {
  margin: 0;
}

.grid {
  height: 100vh;
  width: 100vw;
  background-color: black;
}
```
3. Open `index.html` in the browser and you should see a completely black page

## Exercise Recap
`body` - the tag that we're targeting

`margin` - used to define how much space something should have around it

By default, the body has a margin so we're removing any default space around it.

### Optional Exercise
Adjust the height, width, and margin and see how they change the look of the page.

## Exercise Recap Continued
`.grid` - the class being targeted

`height` - used to define how tall something should be

`width` - used to define how wide something should be

`100vh / 100vw` - vh (view height) and vw (view width) are units for defining how much space something should take up

`background-color` - used to define the background color

By default, the grid doesn't have a height and width, so we're making it take up 100% of the view height and 100% of the view width. We're also giving it a background color of black, so we know that it is taking up the whole page.

## Concepts
**CSS Grid** - similar to height, width, and background-color, CSS Grid is a set of related CSS properties that can be used to define a grid that elements will be placed into

## Exercise
1. Update your styles.css to the following:
```CSS
/* styles.css */
body {
  margin: 0;
}

.grid {
  height: 100vh;
  width: 100vw;

  display: grid;

  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  background-color: black;
}

.tile {
  background-color: green;
}
```

## Exercise Recap
`display: grid` - sets the display property to grid, used to define a grid layout

`grid-template-rows` - property used to define the amount and size of grid rows

`grid-template-columns` - property used to define the amount and size of grid columns

`repeat(3, 1fr)` - used to say "repeat 3 rows/columns of equal size" (1fr is 1 fractional unit)

`gap: 10px` - sets a 10px gap between each grid tile

# Conclusion
Congrats! You now have a 3x3 grid. In the next lesson, we'll learn how to move something around on the grid using JavaScript.

# Beyond the Lesson
Try changing the size of the grid
