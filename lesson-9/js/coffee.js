const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */

class Coffee {
    // Attributes
    size;
    isDecaf;
    qtyCream;
    qtySugar;

    // Constructor
    constructor(size, isDecaf, qtyCream, qtySugar) {
        this.size = size;
        this.isDecaf = isDecaf;
        this.qtyCream = qtyCream;
        this.qtySugar = qtySugar;
    }

    // ServeIt Method
    serveIt() {
        // Generate a IMG of the coffee served
        let cup = document.createElement('img');
        // Set the src path for the IMG element
        cup.src = './images/coffee-cup.svg';
        cup.alt = 'A cup of coffee';
        // Determine caffeine status of the coffee
        this.isDecaf ? cup.src = './images/coffee-cup-green.svg' : cup.src = './images/coffee-cup-purple.svg';
        // Set the size of the cup SVG image based on this.size
        switch (this.size) {
            case 'small':
                cup.height = 100;
                break;
            case 'medium':
                cup.height = 150;
                break;
            case 'large':
                cup.height = 200;
                break;
        }
        // Size the IMG in terms of its height based on the above number from the switch
        // Generate a description of the coffee and put it into the IMG title attribute
        cup.title = `${this.size} ${this.isDecaf ? 'decaf' : 'regular'} coffee with ${this.qtyCream} cream and ${this.qtySugar} sugar.`;
        // Insert the new IMG element into the paragraph
        output.appendChild(cup);
    }
}

/* STEP 2: Instatiate a coffee based on the above constructor function */
let domCoffee = new Coffee('large', false, 2, 1);
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */
domCoffee.serveIt();
/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee {
    // Additional attribute for Latte
    qtyFoam;
    // Constructor for Latte Class
    constructor(size, isDecaf, qtyCream, qtySugar, qtyFoam = 1) {
        // Call the parent class constructor
        super(size, isDecaf, qtyCream, qtySugar);
        // Set the additional Latte attribute
        this.qtyFoam = qtyFoam;
    }
    // Latte Description Method
    latteDesc() {
        return `${this.size} ${this.isDecaf ? 'decaf' : 'regular'} latte with ${this.qtyCream} cream, ${this.qtySugar} sugar, and ${this.qtyFoam} foam.`;
    }
}
/* STEP 6: Create a new instance of the Latte object */
let domLatte = new Latte('medium', false, 1, 2, 3);
/* STEP 7: Call up the latteDesc() method for the above created Latte instance */
domLatte.latteDesc();
/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
