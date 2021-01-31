window.addEventListener("load", () => {
    const inputField = document.querySelector("#text-exercise-4");
    const outputField = document.querySelector(".output-text");
    inputField.addEventListener("input", event => {     
        outputField.innerText = `The above text has ${inputField.value.length} characters`;
    })
})