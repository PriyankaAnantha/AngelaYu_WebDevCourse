import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let numLetters= 0; 
  numLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", { numberOfLetters: numLetters });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// even after refreshing the page, the form seems to still hold onto the data that was previously entered
// this is because the form is still holding onto the data that was previously entered
// how can we clear the form after the data has been submitted?
// we can clear the form by adding a redirect to the get route
// app.post("/submit", (req, res) => {
//   let numLetters= 0;
//   numLetters = req.body["fName"].length + req.body["lName"].length;
//   res.render("index.ejs", { numberOfLetters: numLetters });
// });