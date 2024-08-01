//Imports
import createItem from "./services/item.js";
import * as cartServices from "./services/cart.js";

//Cart representation.
const myCart = [];
const myWhishList = [];

//Show message.
console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("HotWheels Ferrari", 20.99, 1);
const item2 = await createItem("HotWheels Lamborghini", 39.99, 3);

await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);

//await cartServices.deleteItem(myCart, item1);

await cartServices.removeItem(myCart, item2);
await cartServices.removeItem(myCart, item2);

//cartServices.displayCart(myCart);

await cartServices.calculateTotal(myCart);