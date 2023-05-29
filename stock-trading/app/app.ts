import { Negotiation } from './models/negotiation';

const negotiation = new Negotiation(new Date(), 10, 100);
console.log(negotiation.volume);
