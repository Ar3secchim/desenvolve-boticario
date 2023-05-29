import { NegotiationController } from "./controllers/negotiationControler.js";

const controllers = new NegotiationController();
const form = document.querySelector('.form')

form.addEventListener('submit', event =>{
  event.preventDefault()
  controllers.add()
})