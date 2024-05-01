import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const day = new Date().getDay();
  let phrase = "Hey! It's a weekday, it's time to work hard!";
  if (day === 0 || day === 6)
    phrase="Hey! It's the weekend, it's time to have fun!";
  res.render(__dirname + "/views/index.ejs", {name:phrase});
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
