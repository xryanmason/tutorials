# Introduction
This is a practical guide to understanding basic web development concepts, with the intent on getting someone with no or basic knowledge up and running. This means some details or explanations are not complete or entirely accurate, but concise and practical.

This tutorial assumes that the reader has basic knowledge of using a computer, such as navigating a web browser and file system, and installing applications. This tutorial uses OS terms loosely, so File Explorer vs Finder will need to be inferred.

**If you are advanced** - there are some important pieces that will be glossed over that we'll focus on in future lessons, and even though I prefaced this tutorial saying that this was for beginners, some folks are energized by all the fine details when it doesn't matter for a beginner tutorial. This is just meant to help folks make a thing do a thing and learn some stuff :).

# Environment

## Concepts

**Web Browser** - the place where your code runs (in this tutorial); an application that can read and render webpages
- aka browser

**Editor** - the place that you write your code
- aka text editor, source editor, integrated development environment (IDE)

**Visual Studio Code** - a free editor owned by Microsoft
- aka VS Code

## Exercise

**Download, Install, and Open VS Code**

1. Navigate to [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
2. Download the version of VS Code for your operating system
3. Once the download is complete, run and complete the installer
4. Open VS Code

**Create and Open Your Project Folder**
1. In File Explorer, create a new folder where your tutorial files will live
2. In VS Code, open the folder that you created

## Conclusion
You now have an editor, a place where you can write your code. In the next section, we'll create a simple webpage and display it in the browser.

# Hello World!

## Concepts
**HTML** - a language for writing UI code resulting in a representation of the stuff you see on a webpage
- Code: `<button>Click me!</button>`
- File: `index.html`

**Element** - a thing that represents a single thing on a webpage
- Code: `<button>Click me!</button>` represents the button *element*

**Tag** - used to represent the type of the element
- Sometimes elements work differently depending on what word is used, like `<button>` generally gets a special style automatically that makes it look like a button, but you can generally use whatever tags you want.

**Concept Composition** - HTML is made up of elements, with tags denoting their type. It can be written in an editor, saved as an HTML file, and displayed in a web browser.

## Exercise
1. In your editor, create a new file named `index.html`
2. In your new file, write the following:

```
<!DOCTYPE html>
<html>
 <body>
 </body>
</html>
```

## Concepts
This is some [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code) necessary for making a webpage

`<!DOCTYPE html>` - tells the browser that is going to be opening this what kind of file it is

`<html>` - a wrapper for your content

`<body>` - a wrapper for your *actual* content

## Exercise
1. Add an h1 element inside of the body tags
```
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
```

## Exercise Recap
`<h1>` - referred to as heading level 1, meaning it is the most important text on the page

**Hello world!** - used by all programmers to write their first program; once you have done this, you will be officially inducted into the club

## Exercise
1. Save the file
2. Go find the file in file explorer and open it with your web browser
3. You should see “Hello world!” on the screen (nice!)

## Concepts
**CSS** - the style code; the code that makes the HTML look nice

### Example
```
button {
  color: red;
}
```
File: styles.css

## Exercise
1. Create a new file called `styles.css`
2. Add a reference to your CSS file, also called a stylesheet, in your HTML file to let the HTML know where to look for your style code
```
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello world!</h1>
</body>
</html>
```
3. Add a style that targets the h1 tag and makes the text red
```
h1 {
  color: red;
}
```
4. Refresh your browser and you should now see red text

## Exercise Recap
`h1` - the thing you are targeting, that you want to apply the style to

`color` - the attribute that you want to change

`red` - a value for the attribute that you are changing

## Concepts
**JavaScript** - the functionality code; the code that makes the HTML functional and interactive

### Example
```
function clickMe() {
  console.log(‘Hello world!’)
}
```
File: `scripts.js`

## Exercise
1. Add a new file called `scripts.js`
2. Add a reference to your script file to let the HTML know where to look for your script code
```
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello world!</h1>
  <script src="scripts.js"></script> 
</body>
</html>
```
3. Add a button to your HTML
```
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello world!</h1>
  <button class="button">Click me!</button>
  <script src="scripts.js"></script> 
</body>
</html>
```
4. In your script file, write the following to add an event listener to your button:
```
document.querySelector('button').addEventListener('click', () => console.log('Hello world!'))
```
5. Go back to your webpage, refresh it, open the console (right-click, inspect, click the console tab), and click the button
6. You should see “Hello world!” in the console

## Exercise Recap
**document** - referencing the HTML document

**querySelector** - a method that says, “let me query (search for) something on the document using a selector (the way I can identify the thing I’m searching for)"

**addEventListener** - a method that says “I want to listen for when an event happens with this HTML element, such as when someone clicks the element, and I want to do something in response to this event, such as display a message in the console”

**console.log** - lets us output a given message in the console

## Conclusion
Congrats! If you made it this far, you're on your way to becoming a web developer.

## Beyond the Lesson
Try changing some things
- make “Hello world!” say “Hi world!”
- make the heading text blue
- make clicking the header say something rather than clicking the button
