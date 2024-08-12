function beer() {
    var c = 99; 
        while (c>=1){
            if (c=== 1){
                console.log( c + " more bottles of beer on the wall," + c+ "more bottles of beer. Take one down and pass it around, NO more bottles of beer on the wall." );
                            console.log( " No more bottles of beer on the wall, No more bottles of beer. Take one down and pass it around, NO more bottles of beer on the wall." );
                c--; 
            }
            else { 
            console.log(c + " bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around," + (c-1)+ "bottles of beer on the wall." );
            c--; } 
            
        }
        
    }
    beer(); 
    


    // Angela's solution 
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}