# Class 9  Jquery for simplifying DOM

## Table of contents:
1. Links
2. Postman
3. Middleware
4. Embeded Javascript(EJS)
5. Notes
   

## 1. Links
* [Download postman](https://www.postman.com/downloads/)


## 2. Postman
Postman is a software used for testing your backend websites when you are too lazy to setup a frontend. Postman provides a simple frontend interface to sanity check your backend development. 


### Event Handlers
Event handlers are the functions used to communicate between client and server.  
* GET - Retrieves information from the specified resource, and should only be used to request data(not modify it)(request from server)
* POST - Sends data to the server for processing, usually resulting in a change in the server state or side effects on the server.
* PUT - Updates a current resource or creates it if it doesn't exist, with the client providing a complete and updated copy of the resource. 
* PATCH - Updates parts of an existing resource, with the client providing only parts of the resource that needs to be updated.
* DELETE - Removes the specified resource from the server.

### HTTP status codes
* Informational responses (100 – 199)
* Successful responses (200 – 299)
* Redirection messages (300 – 399)
* Client error responses (400 – 499)
* Server error responses (500 – 599)


## 3. Middleware
Middleware is additional code that you add to your server code, which acts as an interface between the client and the server. Middleware can be used to prepare data from the client, to be more easily understood and used by the server. 


## 4. Embeded Javascript(EJS)
Embeded javascript(EJS) is used for creating dynamic html files. First we must add the ejs extension to our vs code. Press <em> Ctrl+Shift+X</em> and search for EJS language support(should be the first one shown) then install it.


### EJS tags
* <%= variable %> the equality sign is used to dereference variables.
* <% console.log("hello") %> used to write javascript code
* <%- \<h1\>Hello\</h1\> %> the minus sign is used to derefernce html code
* <%\# %> hash tag is used for commenting
* <%- include("header.ejs")%> minus sign with include is used for adding external .ejs files.
  
The **locals** variable in ejs represents the object passed from the server. For example, in the servers code:
```
app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data);
}); 
```
The object data would be passed to index.ejs with the name locals. 

### Pass from ejs file to server(post)
[example directory](./passing_data/)



## 5. Notes
* Project: [project](./project.txt) 
* git clone quake

  