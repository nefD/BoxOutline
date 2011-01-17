BoxOutline
===

BoxOutline is a module for the [Impact JS](http://www.impactjs.com) game engine which implements the ability for entities to render their collision boxes atop their sprites when being rendered to the screen.

An entity can set whether or not objects of it's type should render the collision box, as well as set the color and line thickness of the outline drawn. These styles can be used to differentiate between large numbers of objects, or to simply make the outlines easier to see.

*Usage:*

* Create a new folder in your games lib directory named BoxOutline: /lib/game/BoxOutline
* Place the BoxOutline.js file within your new folder.
* Inside the main.js file, require: 'game.BoxOutline.BoxOutline'
* Inside the file for any entity, set drawBox: true
* To change the color of the box, set drawBoxColor to the desired color in hex or rgb format. So for red, '#f00' or 'rgb(255, 0, 0, 0)'. Red is the default.
* To change the line thickness of the box, assign the desired number of pixels to drawBoxSize. The default is 1.0.
