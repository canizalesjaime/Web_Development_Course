import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    //console.log(req.rawHeaders);
    res.send("<h1>HELLOO2</h1>");
});

app.get("/about", (req,res) =>{
    //console.log(req.rawHeaders);
    res.send("<h1>About Me </h1><p>My Name is Jim</p>");
});

app.get("/contact", (req,res) =>{
    //console.log(req.rawHeaders);
    res.send("<h1>Contact Me </h1><p>888-888-8888</p>");
});

app.listen(port, () => {
    console.log("server running on port "+port);
});


