
let user = "";
let product = 0;
let quantity = 0;
let subtotal = 0;
let total = 0;

//Solicitud  de nombre
const userName = () => {
    do{
        user = prompt('Ingrese un nombe: ');
    } while (user == 0);

selectProduct ();
}

//Selecion del  prodcto
const selectProduct = () => {
    
    do {
    let price = 0;
    product = parseInt(prompt('Hello ' + user + ' Choose product number:\n1. Café Bolivia x 250gr $ 2.000\n2. Café Bolivia Caturra 48 x 250gr $ 2.500\n3. Café Bolivia Caturra 72 x 250gr $ 2.500\n4. Café Bolivia Caturra NAT x 250gr $ 1.500\n5. Café Brasil 250gr $ 3.000\n6. INVOICE'));

    switch (product){
        case 1:
            price = 2000;
            totalPrice (price);
            break;
        
        case 2:
            price = 2500;
            totalPrice (price);
            break;
        
        case 3:
            price = 2500;
            totalPrice (price);
            break;
        
        case 4:
            price = 1500;
            totalPrice (price);
            break;
        
        case 5:
            price = 3000;
            totalPrice (price);
            break;
        
        case 6:
            invoice ();
            break;
        
        default:
            alert('Enter a valid option')
            break
    }
} while (product !== 6)

}

//calculo del precio
const totalPrice = (price) => {
    quantity = parseInt(prompt('Choose quantity: '));
    total  += price * quantity;
}

// informacion de la compra
const invoice = () => {
    if (total !=0){
        alert ('Total price: $ ' + total);
        alert ('Thank you for buying')
    } else {
        alert (' NO INVOICE');
    }
}

userName ();







