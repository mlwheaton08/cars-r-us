import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

export const displayWheels = () => {
    let html = '<select name="wheels" id="wheels"><option value="--">--</option>';
    for (const wheel of wheels) {
        html += `<option id="wheel--${wheel.id}" value="${wheel.id}">${wheel.type}</option>`
    }
    html += '</select>';
    return html;
}

document.addEventListener('change', (e) => {
    if (e.target.id === 'wheels') {
        if (e.target.value !== '--') {
            setWheel(parseInt(e.target.value))
        }
    }
})