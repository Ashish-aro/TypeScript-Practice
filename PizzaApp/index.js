// var menu = [
//     { name: 'Onion', price: 80 },
//     { name: 'Capsicum', price: 70 },
//     { name: 'Corn', price: 90 },
//     { name: 'Tomato', price: 60 },
// ];
// var cashInRegister = 100;
// var nextOrderId = 1;
// var orderHistory = [];
// function addNewPizza(pizzaObj) {
//     menu.push(pizzaObj);
// }
// function placeOrder(pizzaName) {
//     var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
//     if (!selectedPizza) {
//         throw new Error('Invalid pizza name');
//     }
//     cashInRegister += selectedPizza.price;
//     var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
//     orderHistory.push(newOrder);
//     return newOrder;
// }
// function completeOrder(orderId) {
//     var order = orderHistory.find(function (order) { return order.id === orderId; });
//     if (!order) {
//         throw new Error('Invalid order id');
//     }
//     order.status = 'completed';
//     return order;
// }
// addNewPizza({ name: 'Panner', price: 100 });
// addNewPizza({ name: 'Onion + Panner', price: 120 });
// addNewPizza({ name: 'Corn + Panner', price: 120 });
// placeOrder('Panner');
// completeOrder(1);
// console.log('Menu: ', menu);
// console.log('Cash Left in Register: ', cashInRegister);
// console.log('Order History: ', orderHistory);
