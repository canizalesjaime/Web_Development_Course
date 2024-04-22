# Class 9  Jquery for simplifying DOM

## Table of contents:
1. Links
2. Including Jquery in HTML
3. Jquery
4. Node.js
5. Express
6. Notes
   

## 1. Links
* [jQuery Doc](https://jquery.com/)
* [Node API Doc](https://nodejs.org/docs/latest/api/)
* [npmjs pacakges](https://www.npmjs.com/)


## 2. Including Jquery in HTML
Add this to html file:  
\<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"\>\</script\>

See example:  [example](./examples/adding_javascript.html) <br><br>
One thing to note is that you should always add javascript as close to the end(as possible) of the script. 


## 3. Jquery
JQuery is an external library used to make your DOM code more concise and readable. See [folder](./jquery_intro/) for examples of using JQuery. The main way to use JQuery is with the $. For example, in DOM you would write document.querySelector("h1"). In JQuery this is simply abbreviated to $("h1"). Reference the JQuery documnetation in the links section for more JQuery function examples.  


## 4. Node.js
Node.js is a software that you can download on your computer. The software provides two main services, first it gives you a javascript interpretter that you can use directly on your computer(you are not restricted to the intertpretter on your browser). This will allow us to easily create servers for our backend applications. Second, it provides the node package manager(npm); which allows us to easily manage and install external dependenices into our node projects.


### Using node.js
* A node directory is created by going into that directory and running the command ``` npm init ``` if this command runs successfully a file named <em> package.json </em> will be created in your current node directory.
* In <em> package.json </em> add  the line - <em>"type": "module",</em>. See [example](./npm_with_node/package.json).
* a node project always installs its dependencies locally. Do ``` run npm i \<package_name \> ``` to install dependencies.  For example: ``` run npm i express ```. After you run this command you will notice a new folder in your directory named <em> node_modules </em>, inside this directory is where all your dependencies will be installed.
* If you are using git, you will notice that whenever you install a dependency, a bunch of files are added to <em> node_modules </em>. In order to avoid clutter in your git commits, it is good practice to add the line <em>*node_modules</em> to your <em>.gitignore</em> file. See [example](../.gitignore).
You can always reinstall your dependencies from your package.json file by running ``` npm install ```. You're dependencies will always be listed in <em>package.json</em>


## 5. Express
Express is an external package for node.js. You can install it by running ``` run npm i express ``` <br>
The purpose of express is to create servers using javascript. A server is a computer that provides some service to another computer. Many websites are actually web applications, and use the client-server architecture. Your own computer(the client) and will request information from another computer(the server) and will display some result. Express is a library that allows us to use our own computer as a server, and enable other computers to act as clients and request information from our server. Examples of functionalities often used in servers are databases and APIS.<br><br>

The first thing we will do is install the nodemon command globally:```npm i -g nodemon``` the <em>-g</em> flag is used to install packages globally(only do this for this case!!). The nodemon command will allow us to make changes to our servers dynamically. <br><br>

Run your first server by running ``` nodemon express_server/index.js```. Now you can visit this server by visiting localhost:3000 in your web browser. Review the [file](./express_server/index.js), and try to visit the other webpages available.

## 6. Notes
* Project:  

  