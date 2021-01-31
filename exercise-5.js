window.addEventListener('load', () => {
    const hexCode = document.querySelector("#text1-exercise-5");
    const box = document.querySelector(".rgbcolor");
    hexCode.addEventListener('input', event => {
        box.style.backgroundColor = hexCode.value;
    });
})
