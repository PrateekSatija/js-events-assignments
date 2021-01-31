window.addEventListener('load', () => {
    const text1 = document.querySelector('#text1-exercise-3');
    const text2 = document.querySelector('#text2-exercise-3');
    const button1 = document.querySelector('#button1-exercise-3');
    const button2 = document.querySelector('#button2-exercise-3');
    button1.addEventListener('click', event => {
        text2.value = encodeURIComponent(text1.value);
    })
    button2.addEventListener('click', event => {
        text2.value = decodeURIComponent(text1.value);
    })
})