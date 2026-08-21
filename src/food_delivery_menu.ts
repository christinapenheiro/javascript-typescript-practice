// Problem 7 — Food Delivery Menu Filter
// Concepts: typed arrays, object types, function parameters, filter(), return types
// Function name must be: findMenuItemsByTag
// Scenario
// A food delivery app lets customers filter a restaurant's menu by a dietary tag, such as "vegan" or "spicy". Each menu item has a name, price, and a tag.
// Task
// Create a function named findMenuItemsByTag. The function should receive an array of menu items and a tag, and return all items that match that tag.
// Requirement
// If no item matches the tag, return an empty array.




// TODO: define a type for a menu item (including tag)
type MenuItem = {
    name: string;
    price: number;
    tag: string;
}
 

function findMenuItemsByTag(menu: MenuItem[], tag: string): MenuItem[] {
 
    // write your code here
    const filterMenu = menu.filter(items => items.tag === tag);

    return filterMenu;
 
}

// const menu = [
//     { name: "Veggie Bowl", price: 350, tag: "vegan" },
//     { name: "Tofu Wrap", price: 300, tag: "vegan" },
//     { name: "Chicken Wings", price: 450, tag: "spicy" },
//     { name: "Beef Burger", price: 500, tag: "spicy" }
// ];



// console.log(findMenuItemsByTag(menu,"vegan"))
// console.log(findMenuItemsByTag(menu,"gluten-free"))

