import { displayPaints } from "./paints.js";
import { displayInteriors } from "./interiors.js";
import { displayTechnologies } from "./technologies.js";
import { displayWheels } from "./wheels.js";
import { displayOrders } from "./orders.js";

export const pageContent = () => {
    return `
        <label for="paints">Paint</label>
        ${displayPaints()}

        <label for="interiors">Interior</label>
        ${displayInteriors()}
        
        <label for="technologies">Technology</label>
        ${displayTechnologies()}
        
        <label for="wheels">Wheels</label>
        ${displayWheels()}

        <button id="orderButton">Place Order</button>

        <article class="orders">
            <h3>Orders</h3>
            ${displayOrders()}
        </article>
    `
}