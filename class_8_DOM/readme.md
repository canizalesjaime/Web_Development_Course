# Class 5  Document Object Model (DOM)

## Table of contents:
1. Links
2. Including Javascript with HTML
3. Javascript and the Document Object Model
4. Notes
   

## 1. Links
* [Dom Doc](https://www.w3schools.com/jsref/dom_obj_style.asp)
* [Event Listener Doc](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [Events](https://developer.mozilla.org/en-US/docs/Web/Events)


## 2. Including Javascript with HTML 
Three method for adding javascript(same as CSS):
* Inline 
* Internal
* External

See example:  [example](./examples/adding_javascript.html) <br><br>
One thing to note is that you should always add javascript as close to the end(as possible) of the script. 


## 3. Javascript and the Document Object Model
Javascript uses the document object model to interact with the html file that includes it. DOM works like this :
![title](./dom_tree.png)<br><br>
For example we can reference the title tag using the document.firstElementChild.firstElementChild.lastElementChild; However this can be tedious so instead we will mostly use the methods document.querySelector("class id or tag") and querySelectorAll("class id or tag"). See the code in this lecture for more examples on how to use. 


## 4. Notes
* Homework: Finish the Drum Kit starting files project using javascript and the DOM. You want to replace the images of the letters with all the images in the folder: [images](./Drum%20Kit%20Starting%20Files/images/), after you set the images also add the relative sound file so that when you click the image of the drum, it makes the corresponding sound. REMEMBER, you are only allowed to modify the index.js [file](./Drum%20Kit%20Starting%20Files/index.js). Submit the index.js file to blackboard.
* Lecture Recording:[lecture recorded](https://youtu.be/3bUqeDQwf04) 

  