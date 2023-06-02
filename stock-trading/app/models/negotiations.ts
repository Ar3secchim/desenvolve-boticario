import { Negotiation } from "./negotiation.js";

export class Negotiations {
  private negotiations: Array<Negotiation> = []

  add(negotiation: Negotiation){
    this.negotiations.push(negotiation)
  }

  //read only
  list(): ReadonlyArray<Negotiation>{
    return this.negotiations
  }
}