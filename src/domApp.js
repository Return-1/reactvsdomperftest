import config from "./config"

let rootNode = document.querySelector("#root");

const dom = () => {
    //clear previous document
    rootNode.innerHTML = "";

    console.time("DOM perf test");
    //add button
    const button = document.createElement("button")
    button.innerHTML = `Add ${config.NUMBER_OF_ELEMENTS} elements`;
    button.addEventListener('click', () => {
        dom();
    })
    document.querySelector("#root").appendChild(button)

    //add X elements
    for (var i = 0; i < config.NUMBER_OF_ELEMENTS; i++) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `element #${i}`
        newDiv.setAttribute("class", 'element')
        rootNode.appendChild(newDiv)
    }

    console.timeEnd("DOM perf test");
}
export default dom;