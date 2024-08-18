import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

/* Write your code here:
Step 1: Render the home page "/" index.ejs
  Hint: Use res.render() to render the index.ejs file

Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */

app.set("view engine", "ejs"); // to use ejs templates for rendering html 
app.use(express.static("public")); // to serve static files like css and images

app.get("/", (req, res) => {
  res.render("index.ejs");
}
);

app.get("/about", (req, res) => {
  res.render("about.ejs");
}
);

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
}
);


app.post("/contact", (req, res) => {

  let submitted = false; 
  let name = req.body["name"];
  let email = req.body["email"];
  let text = req.body["text"];

  res.render("contact.ejs", { name: name, email: email, text: text, submitted: true });
  // after the form is submitted, the page needs to be re rendered to show thank you message. how to do that ?
 // what logic to add in the ejs file to show the thank you message after the form is submitted ?
 // answer is to add an if condition in the ejs file to check if the form is submitted or not.
 // here is the code to add in the ejs file
  // <% if (submitted) { %>
  // <h2>Thank you for your message!</h2>
  // <% } %>
  // now the ejs file will show the thank you message after the form is submitted.
  // what is this submitted variable ? how to set it to true after the form is submitted ?
  // answer is to pass the submitted variable to the ejs file when rendering it.
  // here is the code to add in the index.js file
  // res.render("contact.ejs", { name: name, email: email, text: text, submitted: true });
  // how to set the submitted variable to true after the form is submitted ?// how should i declare the submitted variable in the js file ?
  // answer is to declare the submitted variable in the js file and set it to true after the form is submitted.
  // here is the code to add in the index.js file
  // let submitted= false;
  // let name = req.body["name"];
  // let email = req.body["email"];
  // let text = req.body["text"];
  // res.render("contact.ejs", { name: name, email: email, text: text, submitted: true });
  // now the submitted variable is set to true after the form is submitted.
} 
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
