var names= ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function who_buys_lunch(names){
    var buyerpicker = Math.random();
    buyerpicker = Math.floor( (buyerpicker* names.length) +1 ) ; 
    var finalbuyer = names[buyerpicker];
    console.log(finalbuyer);
    return finalbuyer;  
}
who_buys_lunch(names);