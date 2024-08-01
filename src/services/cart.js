async function load(){
    var color;
    import color from 'colors';
}

async function addItem(userCart, item) {
    userCart.push(item);
}

async function calculateTotal(userCart) {
    await load();
    let result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("Shopee Cart TOTAL Is: " + result);
}

/**
 * @param userCart - Recebe o carrinho ou lista de desejo do usuario.
 * @param name - Recebe o nome do item
 * @returns {Promise<void>} - Retorna uma promise VOID caso false.
 */
async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name.name);

    if(index !== (-1)) {
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, index) {
    const indexFound = userCart.findIndex(item => item.name === index.name);

    if(indexFound !== -1) {
        if(userCart[indexFound].quantity > 1){
            userCart[indexFound].quantity--;
        }else if(userCart[indexFound].quantity === 1){
           await this.deleteItem(userCart, index);
        }
    }
}

async function displayCart(userCart) {
    console.clear()
    await load();
    console.log("### SHOPEE CART LIST ###".bold.red)
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} Price: ${item.price}  Qtd: ${item.quantity}`.america);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
};

