import express from express;
import path from path;
import ejs from ejs;

const app = express();
const port = 3000;

// use js getday method to build a website that gives advice based on the day of the week


app.get ("/", (req, res) => {
    res.render("index.ejs", {daytype:'a weekday', advice: 'Drink more booze!'});
} );

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
