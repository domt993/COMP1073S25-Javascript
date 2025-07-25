const output = document.getElementById('output');

/* STEP 1a: Create a new object using a regular function */
function newVehicle(make, model, color) {
    let vehicle = {};
    vehicle.make = make;
    vehicle.model = model;
    vehicle.color = color;
    vehicle.describe = function() {
        return `${this.color} ${this.make} ${this.model}`;
    };
    return vehicle;
}

/* STEP 1b: Use the console to create a new album object, and then invoke the function represented using .describe() */
let myCar =newVehicle('Toyota', 'Corolla', 'Blue').describe(); // "blue Toyota Corolla"

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - rewrite the above function, without returning anything. Capitalize the name of the function. */


/* STEP 2b: Use the console to create a couple of different albums, using the 'new' keyword, and again invoking the .describe() method for each one */


/* STEP 3a: Build the complete constructor for the object Album (comment out the above functions first). Include album name, artist, year, number of tracks, and description (function). */
// constructor for Vehicle
function Vehicle(Make, Model, Color) {
    this.make = Make;
    this.model = Model;
    this.color = Color;
    this.describe = function() {
        return `Your car is a ${this.color} ${this.make} ${this.model}`;
    };
}

// making a new vehicle object using the constructor
let myCar2 = new Vehicle('Honda', 'Civic', 'Red');
let myCar3 = new Vehicle('Ford', 'Focus', 'Black');
/* STEP 3b: Instantiate a new Album (or 2) based on the above constructor */

/* STEP 3c: Attempt to access the various properties of album2 or album3 using the console. */
// album2['name']
// album2['artist']
// album2.numTracks
// album2.year
/* STEP 3d: Invoke a method belonging to one of the album objects */
// album2.describe()
// album3.describe()

/* STEP 4a: Modify the describe method of the above Album constructor so that it returns a string. */

/* STEP 4b: Capture the description of one of the album objects and set it as the text for the paragraph on the page (see line 1 of this script). */


// That's it! Now on to the Lab...

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
