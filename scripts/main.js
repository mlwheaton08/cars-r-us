import { pageContent } from './page-content.js';

const renderAllHTML = () => {
    document.getElementById('container').innerHTML = pageContent()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})