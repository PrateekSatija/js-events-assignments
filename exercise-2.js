window.addEventListener('load', () => {
    const button1 = document.querySelector('#button1-exercise-2');
    const button2 = document.querySelector('#button2-exercise-2');
    const text = document.querySelector('#text-exercise-2');
    button1.addEventListener('click', event => {
        text.value--;
    })
    button2.addEventListener('click', event => {
        text.value++;
    })
})