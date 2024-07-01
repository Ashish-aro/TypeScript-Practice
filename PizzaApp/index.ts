
type Pizza = {
    id: number,
    name: string,
    price: number
};


let nextPizzaId: number = 1;

const menu: Array<Pizza> = [
    { id: nextPizzaId++, name: 'Onion', price: 80 },
    { id: nextPizzaId++, name: 'Capsicum', price: 70 },
    { id: nextPizzaId++, name: 'Corn', price: 90 },
    { id: nextPizzaId++, name: 'Tomato', price: 60 },
];

let cashInRegister = 100;
let nextOrderId = 1;

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed",
};

const orderHistory: Array<Order> = [];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza = { id: nextPizzaId++, ...pizzaObj };
    menu.push(newPizza);
    return newPizza;
}

function placeOrder(pizzaName: string): Order {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        throw new Error('Invalid pizza name');
    }
    cashInRegister += selectedPizza.price;
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderHistory.push(newOrder);
    return newOrder;
}

function completeOrder(orderId: number): Order {
    const order = orderHistory.find(order => order.id === orderId);
    if (!order) {
        throw new Error('Invalid order id');
    }
    order.status = 'completed';
    return order;
}

function getPizzaDetails(identifier: string | number): Pizza {
    if (identifier === "string") {
        const requestedPizzaDetails = menu.find(pizzaObj => identifier.toLowerCase() === pizzaObj.name.toLowerCase());
        if (requestedPizzaDetails === undefined) {
            throw new Error('Invalid pizza name');
        }
        return requestedPizzaDetails;
    }
    else if(typeof identifier === "number"){
        const requestedPizzaDetails = menu.find(pizzaObj => identifier === pizzaObj.id);
        if (requestedPizzaDetails === undefined) {
            throw new Error('Invalid pizza id');
        }
        return requestedPizzaDetails;
    } else {
        throw new Error('Invalid identifier');
    }
}

addNewPizza({ name: 'Panner', price: 100 });
addNewPizza({ name: 'Onion + Panner', price: 120 });
addNewPizza({ name: 'Corn + Panner', price: 120 });

placeOrder('Panner');
completeOrder(1);

console.log('Menu: ', menu);
console.log('Cash Left in Register: ', cashInRegister);
console.log('Order History: ', orderHistory);