import { getOrders, addOrder } from "./database.js";

const orders = getOrders();

export const displayOrders = () => {
    let html = '<ul>';
    for (const order of orders) {
        html += `<li>Order#${order.id} was placed on ${order.timestamp}</li>`;
    }
    html += '</ul>';
    return html;
}

document.addEventListener('click', (e) => {
    if (e.target.id === 'orderButton') {
        addOrder()
    }
})