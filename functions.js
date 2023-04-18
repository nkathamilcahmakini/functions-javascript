//You manage a grocery store and need to keep track of the inventory of various items. 
//You will use arrays to store the data and various functions to manipulate and analyze the data.

//1.Create an array containing the names of all items in the inventory maximum of 10.
       const items = ["Bell Peppers","Broccoli", "Garlic", "Lemon", "Basil", "Tomatoes", 
                       "Strawberries", "Apples", "Onions", "Carrots"];

//2.Create a separate array with the corresponding stock quantities of each item maximum of 10.
        const quantities = [30,25,23,42,56,76,84,100,65,90];

//3.Write a function to add a new item to the inventory, updating both arrays.

function addItems(itemName, quantity){
    items.push(itemName);
    quantities.push(quantity);
    }
    addItems("Cilantro", 12);
    console.log(items);
    console.log(quantities);

//4.Write a function to update the stock quantity of an existing item.
    

//5.Write a function to calculate the total number of items in the inventory.
function totalItems(){
    let total = 0;
    for(let i = 0; i < quantities.length; i++){
        total += quantities[i];
    }
    return total;
}
console.log(totalItems());

//6.Write a function to find the item with the lowest stock quantity.
function findLowest(){
    let lowest = quantities[0];
    let index = 0;
    for(let i = 1; i < quantities.length; i++){
        if(quantities[i] < lowest){
            lowest = quantities[i];
            index = i;
        }
    }
    return items[index];
}
console.log(findLowest());







// Parsley
// Cilantro
// Potatoes
// Spinach
// Bananas
// Avocados