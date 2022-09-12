import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

export const displayInteriors = () => {
    let html = '<select name="interiors" id="interiors"><option value="--">--</option>';
    for (const interior of interiors) {
        html += `<option id="interior--${interior.id}" value="${interior.id}">${interior.material}</option>`
    }
    html += '</select>';
    return html;
}

document.addEventListener('change', (e) => {
    if (e.target.id === 'interiors') {
        if (e.target.value !== '--') {
            setInterior(parseInt(e.target.value))
        }
    }
})