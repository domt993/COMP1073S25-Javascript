// STEP 1: Declare and initialize variables

// STEP 1a: Grab the parts of the DOM that we need to build the invoice
const tableBody = document.querySelector("tbody");
const total = document.querySelector("tfoot tr td");
// STEP 1b: Build the products array in the format 'Product Name:0.00'
let products = ["Frozen Pizza: 5.99", "Orange Juice: 7.95", "Milk: 6.95", "Dozen Eggs: 6.95", "Bacon: 7.49", "Kiwi Fruit: 3.95"];
// STEP 1c: Set up invoiceTotal variable - start at zero
let invoiceTotal = 0;
// STEP 1d: Declare the itemRow and the itemDetail array;
let itemRow = [];
let itemDetail = [];
// STEP 2: Build a loop to iterate through the products array
for (let i = 0; i < products.length; i++) {
	// STEP 3: Break apart the product name from the price for each item with split()
	let productName = products[i].split(": ")[0];
	let productPrice = products[i].split(": ")[1];
	// STEP 4: Now we have an array as an element of an array - set the second array element to the product price (as type number)
	productPrice = Number(productPrice);
	// STEP 5: Add the price of this product to the invoice total
	invoiceTotal += productPrice;
	// STEP 6: Capture each product name and price as variables 
	
	// STEP 7: Create a TR element for this product and price in the invoice table
	let trElement = document.createElement("tr");
	tableBody.append(trElement);
	//itemRow[i] = document.createElement("tr");
	// STEP 8: Build the string that contains two TD elements each containing one of the item description, and the item price
	itemDetail[i] = `<td>${productName}</td><td>$${productPrice}</td>`;
	trElement.innerHTML = itemDetail[i];

	// STEP 9: Set the above string as the innerHTML of the new TR element, and then append the new element to the table body (var productList)

}
// STEP 10: Set the total cost of the invoice as the textContent of the TD in the TFOOT (var totalData), rounding the number to two decimal places
total.textContent = `$${invoiceTotal.toFixed(2)}`;