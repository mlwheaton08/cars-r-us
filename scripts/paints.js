import { getPaints, setPaint } from "./database.js";

const paints = getPaints()

export const displayPaints = () => {
    let html = '<select name="paints" id="paints"><option value="--">--</option>';
    for (const paint of paints) {
        html += `<option id="paint--${paint.id}" value="${paint.id}">${paint.color}</option>`
    }
    html += '</select>';
    return html;
}

document.addEventListener('change', (e) => {
    if (e.target.id === 'paints') {
        if (e.target.value !== '--') {
            setPaint(parseInt(e.target.value))
        }
    }
})