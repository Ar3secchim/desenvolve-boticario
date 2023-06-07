import { NegotiationController } from "./controllers/negotiationControler.js";
const controllers = new NegotiationController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controllers.additional();
    });
}
else {
    throw Error('não foi possível inicializar a aplicação. Verefique se o formulário existe');
}
