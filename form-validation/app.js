import {validaCPF, validation} from './register-client/main.js'

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        validation(evento.target)
        validaCPF(evento.target)
    })
})
