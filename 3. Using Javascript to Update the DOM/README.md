# Introduction
This tutorial assumes that you've completed previous tutorials and will build on those concepts. This tutorial explains how to use JavaScript to move a game piece around on the gameboard grid that was created in the previous tutorial.

# Overview
There are lots of ways we could go about making something move around on the page. The reason this way was chosen is because it is the most straightforward using what we've learned so far, in my opinion.

# Data Attributes

## Concepts
data attribute - an attribute that allows us to store data on an HTML element so it can later be referenced in JavaScript

## Example
```HTML
<!-- index.html -->
<div data-x="1" data-y="1"></div>
```

Notice that the syntax for defining a data attribute is `data-` followed by the name that you want to give the data, and `=` followed by the value that the data attribute should be set to in double-quotes.

## Exercise
1. Starting with the files from the previous tutorial, update the HTML file to look like the following:
```HTML
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="grid">
    <div data-y="3" data-x="1" class="tile"></div>
    <div data-y="3" data-x="2" class="tile"></div>
    <div data-y="3" data-x="3" class="tile"></div>
    <div data-y="2" data-x="1" class="tile"></div>
    <div data-y="2" data-x="2" class="tile"></div>
    <div data-y="2" data-x="3" class="tile"></div>
    <div data-y="1" data-x="1" class="tile"></div>
    <div data-y="1" data-x="2" class="tile"></div>
    <div data-y="1" data-x="3" class="tile"></div>
  </div>
  <script src="scripts.js"></script> 
</body>
</html>
```

## Exercise Recap
We're using `data-x` and `data-y` to represent locations in a grid. We'll use these locations when moving a player around on the grid.

## Concept Review
In the first lesson, we wrote the following JavaScript:
```JavaScript
// scripts.js
document.querySelector('button').addEventListener('click', () => console.log('Hello world!'))
```
If you recall, `'click'` is a parameter that is passed to `addEventListener`, which means that when something is clicked, some code will run. Imagine how this could be used to move something around on the page.

Instead of listening for clicks, we could listen for keypresses, such as the arrow keys or WASD and then do something based on that. That's exactly what we'll be doing.

## Exercise
1. Create a new file called `scripts.js`
2. Write the following:
```JavaScript
document.addEventListener("keydown", (e) => {
  console.log('Hello world!')
})
```
3. Just like we did in the first lesson, open your `index.html` file in the browser and open the developer console.
4. Click the middle of the page so that the page has focus (click anywhere in the middle of the webpage) and then press a key on your keyboard. You should see "Hello world!" in your console.

## Exercise Review
We used an event listener to listen for keydown events and display a message in the console.

## Concepts
`if` statement - lets you specify a condition that must be met before running the next bit of code

## Example
```JavaScript
if (someVariable === true) console.log('it was true!')
```

## Exercise
1. Update your `scripts.js` file to the following:
```JavaScript
document.addEventListener("keydown", (event) => {
  if (event.key === "w") console.log("Hello world!")
  if (event.key === "a") console.log("Hello world!")
  if (event.key === "s") console.log("Hello world!")
  if (event.key === "d") console.log("Hello world!")
})
```
2. Save and open `index.html` in your browser and open the console
3. Press the letter `y` on your keyboard and notice that nothing is put into the console
4. Press the letter `w` on your keyboard and notice that something is put into the console

## Exercise Recap
`event` - the thing that contains something that tells us what key was pressed; the event variable that contains our click event
`event.key` - key contains a string of text that matches what key was pressed; i.e. `event.key` could equal `w` if the w key was pressed; event is an object, objects have properties, `key` is a property on the event object

So this code makes it so "Hello world!" is output to the console when W, A, S, or D is pressed. This means we're getting closer to using those keys to moving something around on the grid.

## Exercise
1. Change the class on your first div element in your `index.html` file to the following:
```HTML
<!-- index.html -->
<div data-y="3" data-x="1" class="player"></div>
```
2. Add the following class to your CSS file:
```
/* styles.css */
.player {
  background-color: white;
}
```
3. View the page, and you should see that one of the grid squares is white instead of green

## Exercise Recap
The white square is going to represent the thing that we're going to move around with WASD.

## Exercise
1. Update your `scripts.js` file to the following:
```JavaScript
document.addEventListener("keydown", (event) => {
  const playerEl = document.querySelector('.player');

  const playerPosition = { ...playerEl.dataset};

  if (event.key === "w") 
    playerPosition.y = +playerPosition.y + 1;
  if (event.key === "a") 
    playerPosition.x = +playerPosition.x - 1;
  if (event.key === "s") 
    playerPosition.y = +playerPosition.y - 1;
  if (event.key === "d") 
    playerPosition.x = +playerPosition.x + 1;
  
  const requestedPositionEl = document.querySelector(`[data-x="${playerPosition.x}"][data-y="${playerPosition.y}"]`);

  if (requestedPositionEl) {
    playerEl.setAttribute('class', 'tile');
    requestedPositionEl.setAttribute('class', 'player');
  }
})
```
2. Before quitting out of the tutorial due to being overwhelmed, go open the `index.html` file in your browser and use the WASD keys to move the white square around.
2. Boy howdy, take a breath. We'll break it down.

## Exercise Recap
`const playerEl = document.querySelector('.player');` - in the first lesson, we used `document.querySelector` to target a button and listen for click events on it. Here, we're targeting the `<div data-y="3" data-x="1" class="player"></div>` element by the class `player`. The `const playerEl` is just creating a variable with a nice name so we don't have to write `document.querySelector('.player')` every time we want to talk about that element.

`playerEl.dataset` - playerEl is an object, and dataset is a property on it that contains information from our data attributes; remember that playerEl is really referring to the `<div data-y="3" data-x="1" class="player"></div>` element

`const playerPosition = { ...playerEl.dataset};` - this is a bit advanced and unfortunate that we have to write it this way, but all this is doing is making a copy of the `dataset` information and giving it a nice name called `playerPosition`

`if (event.key === "w") playerPosition.y = +playerPosition.y + 1;` - this is saying "if the key that was pressed was w, take the player's current position and add 1 to its current y coordinate" or said differently, "move up when W is pressed"

`+playerPosition.y` - this is also a little advanced and unfortunate that we have to write it this way, but this is just saying "hey, we want to do math on this number so make it into a number and not a string of text". Don't worry about this too much right now.

A similar pattern is followed for the remaining directional keys.

```const requestedPositionEl = document.querySelector(`[data-x="${playerPosition.x}"][data-y="${playerPosition.y}"]`);``` - this is finding the location that we want to move to and giving it a nice name

```[data-x="${playerPosition.x}"][data-y="${playerPosition.y}"]``` - this is pretty advanced as well (I never said it'd be easy, but I am doing my best to explain :)). Earlier, we updated `playerPosition` to contain the x/y coordinates of the location that we want to move. This is using those x/y coordinates to look up the element for it.

```JavaScript
if (requestedPositionEl) {
  playerEl.setAttribute('class', 'tile');
  requestedPositionEl.setAttribute('class', 'player');
}
```
this is saying, "if you found a requestedPositionEl, meaning the place we're trying to move is not off screen and is a valid grid location, then update our current location to be a tile instead of a player, and update our requested location to be a player instead of a tile".

Breaking that down:

`if (requestedPositionEl) {` - if requestedPositionEl has a value then continue to the next couple of lines

`playerEl.setAttribute('class', 'tile');` - playerEl is an object that has a method called `setAttribute` that lets us update our HTML classes right from JavaScript. Remember how we manually put `class="player"` on the white player div in the HTML? This is doing the same thing, except it is making it a tile class instead.

`requestedPositionEl.setAttribute('class', 'player');` - requestedPosition also has `setAttribute`, and in this case, we're setting the class to be `player` on our requested grid location, the place that we want to move.

# Conclusion
If you made it this far, holy cow. You're doing great. Be sure to reach out with questions.
