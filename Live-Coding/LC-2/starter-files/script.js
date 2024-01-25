// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

const button = document.getElementById('button');
const respuesta = document.getElementById('answer');
const input = document.getElementById('input');

async function generateAnswer() {
    try {
        const answer = await fetch(API_ENDPOINT);
        const data = answer.json();

        data.then(datos => {
            respuesta.innerText = datos.answer;
        });
        limpiarCampos();
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', () => {
    generateAnswer();
    console.log(input.value);
});

function handleKeyEnter(e) {
    let longitud = input.value.length;
    if (e.key === 'Backspace') {
        if (longitud <= 1) {
            button.disabled = true;
        }
    } else if (input.value.length > 0) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

const limpiarCampos = () => {
    setTimeout(() => {
        input.value = '';
        respuesta.innerText = '';
    }, 5000);
};
