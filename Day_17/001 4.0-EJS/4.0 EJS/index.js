import express from "express";



const app = express();
const port = 3000;

// use js getday method to build a website that gives advice based on the day of the week
// getDay() returns a number between 0 and 6, where 0 represents Sunday, 1 represents Monday, 2 represents Tuesday, and so on.
//how to use getDay() to get the day of the week
// const d = new Date();
// const n = d.getDay();
// console.log(n);


app.get ("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = 'a weekend';
    let advice = 'Drink more booze!';

    if (day > 0 && day < 6) { //sun = 0, mon = 1, tue = 2, wed = 3, thu = 4, fri = 5, sat = 6
        type = 'a weekday';
        advice = 'Drink more coffee!';
    }

    
    res.render("index.ejs", {daytype:type , advice: advice});
} );

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
