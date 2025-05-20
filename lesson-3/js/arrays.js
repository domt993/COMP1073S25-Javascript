const output = document.querySelector('ul');

/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
let myArray = [true, "string", 100, [5, "array"]];
output.textContent = myArray[3][1];
/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
output.textContent = `The first element of the nested array is ${myArray[3][0]}\n`;
output.textContent = "";
// You can also change a particular element
myArray[0] = false;
// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
myArray[3][1] = "nested array";
/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */

// In particular, looping through arrays
//nested list
for (let i = 0; i < myArray.length; i++) {
    let list = document.createElement('li');
    output.append(list);
    if (typeof myArray[i] === "object") { // can also do Array.isArray(myArray[i])
        let nestedList = document.createElement('ul');
        // we need a nested ul to display the contents of the nested array
        list.append(nestedList);
        for (let j = 0; j < myArray[i].length; j++) {
            let listItem = document.createElement('li');
            nestedList.append(listItem);
            listItem.textContent += `The ${j}th element of the array is ${myArray[i][j]}`
        }
        
    }
    else {
        list.textContent += `The ${i}th element of the array is ${myArray[i]}`;
    }
    
    
    
}
/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
let orig6 = `Toronto Maple Leafs, Chicago Black Hawks, Detroit Red Wings, Boston Bruins, Montreal Canadiens, New York Rangers`;
let teams = orig6.split(", ");
// Output one of the array items
console.log(teams[0]);
// Output the last element of the array
console.log(teams[teams.length - 1]);
/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */
let teamString = teams.join(", ");
console.log(teamString);
teamString = teams.toString();
console.log(teamString);
/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */

// Adding one or more items to an array with push()
teams.push("new addition")
// If you would like to capture how many elements are in the array after you have edited it, then…
let teamsLength = teams.push("another new addition");
// Removing an item from an array with pop()
// teams.pop(); //removes last item
// pop() returns the item that was removed, rather than the length of the updated array, so…
let removed = teams.pop();
// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
console.log(teams);
teams.shift(); //removes first item
console.log(teams);
teams.unshift("new first item"); // adds first item
// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()
teams.splice(2, 1, "spliced item") // at index 2, remove 1 item, and add spliced item
/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */