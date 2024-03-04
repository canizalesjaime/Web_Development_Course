# Class 4 CSS

## Table of contents:
1. Links
2. Flexbox
3. Grid
4. Notes
   

## 1. Links
* [flexboxfroggy game](https://flexboxfroggy.com/)
* [grid garden game](https://cssgridgarden.com/)


## 2. Flexbox
Our second example for website responsiveness is flexbox.Flexbox provides a predefined layout for your webpage.  One way to think of flexbox is that it makes the boxes from the box-model flexible(we will see in example). Flexbox is easy to use, and is great for websites that have a 1-row or 1-column like structure. It is easy to resize boxes, and place them around the screen(especially to center!). Flexbox is less trivial when you have to structure your webpage like a grid(several rows and columns), and though possible the "display: Grid" functionality is a better alternative for these cases.
See [Example](./flexbox/index.html) <br>
You can also visit [flexbox cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) to get a reminder on how to use flexbox and relevent commands. 


## 3. Grid
Grid is a display type that makes it easy to format your webpage in a table-like format. Here are the main arguments that you can modify in order to design your web-page(the arguments below accept units for fr, px, %, em and rem):
* grid-template-rows: used to set rows of grid(must be used in parent container)
* grid-template-columns: used to set columns of grid(must be used in parent container)
* grid-column: sets the range of the grid item with respect to its columns(must be used in child(grid item))
* grid-rows: sets the range of the grid item with respect to its rows(must be used in child(grid item))
* order: changes the order in which the grid items appear(must be used in child(grid item))

There are more arguments, but you can usually get away with using just these. 

See [Example](./grid/index.html)


## 4. Notes
* Homework : Complete the grid garden game, and submit your answers on a .txt file to blackboard. 
