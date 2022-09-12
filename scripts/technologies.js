import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies()

export const displayTechnologies = () => {
    let html = '<select name="technologies" id="technologies"><option value="--">--</option>';
    for (const technology of technologies) {
        html += `<option id="technology--${technology.id}" value="${technology.id}">${technology.package}</option>`
    }
    html += '</select>';
    return html;
}

document.addEventListener('change', (e) => {
    if (e.target.id === 'technologies') {
        if (e.target.value !== '--') {
            setTechnology(parseInt(e.target.value))
        }
    }
})